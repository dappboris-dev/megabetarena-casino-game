import { Request, Response, NextFunction } from 'express';
import { gameService } from '../services/game.service';
import { solanaGameService } from '../services/solana-game.service';
import { playGameSchema, claimRewardSchema } from '../validators/game.validator';
import { sendSuccess, sendError } from '../utils/response.util';
import { CustomError } from '../middleware/error-handler';
import { AuthRequest } from '../middleware/auth.middleware';
import { PublicKey } from '@solana/web3.js';
import { config } from '../config/env.config';
import { isValidAmount } from '../utils/validation.util';

export class GameController {
  async playGame(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.userId!;
      const walletAddress = req.walletAddress!;
      const validated = playGameSchema.parse(req.body);
      
      // Validate bet amount
      if (!isValidAmount(validated.betAmount, config.minBetAmount, config.maxBetAmount)) {
        return sendError(res, `Bet amount must be between ${config.minBetAmount} and ${config.maxBetAmount} SOL`, 400);
      }
      
      // Create game record
      const game = await gameService.createGame(
        userId,
        walletAddress,
        validated.gameType,
        validated.betAmount,
        validated.playerChoice
      );
      
      // For coinflip, prepare Solana transaction
      if (validated.gameType === 'coinflip' && validated.playerChoice !== undefined) {
        try {
          const playerPubkey = new PublicKey(walletAddress);
          const transaction = await solanaGameService.playCoinflip(
            playerPubkey,
            validated.playerChoice,
            validated.betAmount
          );
          
          sendSuccess(res, {
            gameId: game.gameId,
            transaction,
            message: 'Game created. Please sign and submit the transaction.',
          }, 'Game created successfully');
        } catch (error: any) {
          // Update game status to failed
          await gameService.updateGameStatus(game.gameId, 'cancelled' as any);
          throw error;
        }
      } else {
        sendSuccess(res, {
          gameId: game.gameId,
        }, 'Game created successfully');
      }
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return sendError(res, error.errors[0].message, 400);
      }
      next(error);
    }
  }

  async getGame(req: Request, res: Response, next: NextFunction) {
    try {
      const { gameId } = req.params;
      const game = await gameService.getGameById(gameId);
      
      sendSuccess(res, {
        gameId: game.gameId,
        gameType: game.gameType,
        status: game.status,
        betAmount: game.betAmount,
        rewardAmount: game.rewardAmount,
        playerChoice: game.playerChoice,
        result: game.result,
        isClaimed: game.isClaimed,
        transactionSignature: game.transactionSignature,
        createdAt: game.createdAt,
      });
    } catch (error) {
      next(error);
    }
  }

  async getUserGames(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.userId!;
      const limit = parseInt(req.query.limit as string) || 50;
      const skip = parseInt(req.query.skip as string) || 0;
      
      const games = await gameService.getUserGames(userId, limit, skip);
      
      sendSuccess(res, {
        games: games.map(game => ({
          gameId: game.gameId,
          gameType: game.gameType,
          status: game.status,
          betAmount: game.betAmount,
          rewardAmount: game.rewardAmount,
          playerChoice: game.playerChoice,
          result: game.result,
          isClaimed: game.isClaimed,
          createdAt: game.createdAt,
        })),
        total: games.length,
      });
    } catch (error) {
      next(error);
    }
  }

  async claimReward(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.userId!;
      const walletAddress = req.walletAddress!;
      const validated = claimRewardSchema.parse(req.body);
      
      const game = await gameService.getGameById(validated.gameId);
      
      // Verify game belongs to user
      if (game.userId.toString() !== userId) {
        return sendError(res, 'Unauthorized', 403);
      }
      
      // Prepare claim transaction
      const playerPubkey = new PublicKey(walletAddress);
      const transaction = await solanaGameService.claimReward(playerPubkey);
      
      sendSuccess(res, {
        gameId: game.gameId,
        transaction,
        message: 'Please sign and submit the transaction to claim your reward.',
      }, 'Claim transaction prepared');
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return sendError(res, error.errors[0].message, 400);
      }
      next(error);
    }
  }

  async confirmGameResult(req: Request, res: Response, next: NextFunction) {
    try {
      const { gameId, transactionSignature, rewardAmount, result } = req.body;
      
      if (!gameId || !transactionSignature) {
        return sendError(res, 'Game ID and transaction signature are required', 400);
      }
      
      const game = await gameService.updateGameStatus(
        gameId,
        'completed' as any,
        rewardAmount,
        result,
        transactionSignature
      );
      
      // Update user stats
      const { userService } = await import('../services/user.service');
      await userService.updateUserStats(
        game.userId.toString(),
        game.betAmount,
        game.rewardAmount,
        1
      );
      
      sendSuccess(res, {
        gameId: game.gameId,
        status: game.status,
        rewardAmount: game.rewardAmount,
      }, 'Game result confirmed');
    } catch (error) {
      next(error);
    }
  }

  async getRecentGames(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const games = await gameService.getRecentGames(limit);
      
      sendSuccess(res, {
        games: games.map(game => ({
          gameId: game.gameId,
          gameType: game.gameType,
          betAmount: game.betAmount,
          rewardAmount: game.rewardAmount,
          walletAddress: game.walletAddress,
          createdAt: game.createdAt,
        })),
      });
    } catch (error) {
      next(error);
    }
  }

  async getBigWins(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const games = await gameService.getBigWins(limit);
      
      sendSuccess(res, {
        games: games.map(game => ({
          gameId: game.gameId,
          gameType: game.gameType,
          betAmount: game.betAmount,
          rewardAmount: game.rewardAmount,
          walletAddress: game.walletAddress,
          createdAt: game.createdAt,
        })),
      });
    } catch (error) {
      next(error);
    }
  }

  async getGameStats(req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await gameService.getGameStats();
      sendSuccess(res, stats);
    } catch (error) {
      next(error);
    }
  }

  async getPlayerPoolData(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const walletAddress = req.walletAddress!;
      const playerPubkey = new PublicKey(walletAddress);
      const poolData = await solanaGameService.getPlayerPoolData(playerPubkey);
      
      sendSuccess(res, poolData || { message: 'Player pool not initialized' });
    } catch (error) {
      next(error);
    }
  }
}

export const gameController = new GameController();

