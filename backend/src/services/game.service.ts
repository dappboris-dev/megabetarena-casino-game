import { Game, IGame, GameType, GameStatus } from '../models/game.model';
import { User } from '../models/user.model';
import { CustomError } from '../middleware/error-handler';
import { v4 as uuidv4 } from 'uuid';
import { solToLamports } from './solana.service';

export class GameService {
  async createGame(
    userId: string,
    walletAddress: string,
    gameType: GameType,
    betAmount: number,
    playerChoice?: number
  ): Promise<IGame> {
    const gameId = uuidv4();
    
    const game = new Game({
      gameId,
      userId,
      walletAddress,
      gameType,
      status: GameStatus.PENDING,
      betAmount: solToLamports(betAmount),
      rewardAmount: 0,
      playerChoice,
      isClaimed: false,
    });
    
    await game.save();
    return game;
  }

  async getGameById(gameId: string): Promise<IGame> {
    const game = await Game.findOne({ gameId });
    if (!game) {
      throw new CustomError('Game not found', 404);
    }
    return game;
  }

  async getUserGames(
    userId: string,
    limit: number = 50,
    skip: number = 0
  ): Promise<IGame[]> {
    return await Game.find({ userId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
  }

  async updateGameStatus(
    gameId: string,
    status: GameStatus,
    rewardAmount?: number,
    result?: number,
    transactionSignature?: string
  ): Promise<IGame> {
    const game = await this.getGameById(gameId);
    
    game.status = status;
    if (rewardAmount !== undefined) {
      game.rewardAmount = rewardAmount;
    }
    if (result !== undefined) {
      game.result = result;
    }
    if (transactionSignature) {
      game.transactionSignature = transactionSignature;
    }
    
    await game.save();
    return game;
  }

  async claimReward(gameId: string, claimSignature: string): Promise<IGame> {
    const game = await this.getGameById(gameId);
    
    if (game.isClaimed) {
      throw new CustomError('Reward already claimed', 400);
    }
    
    if (game.status !== GameStatus.COMPLETED) {
      throw new CustomError('Game not completed', 400);
    }
    
    if (game.rewardAmount === 0) {
      throw new CustomError('No reward to claim', 400);
    }
    
    game.isClaimed = true;
    game.claimTransactionSignature = claimSignature;
    
    await game.save();
    
    // Update user stats
    const user = await User.findById(game.userId);
    if (user) {
      user.totalWon += game.rewardAmount;
      await user.save();
    }
    
    return game;
  }

  async getRecentGames(limit: number = 20): Promise<IGame[]> {
    return await Game.find({ status: GameStatus.COMPLETED })
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate('userId', 'walletAddress username')
      .select('-__v');
  }

  async getBigWins(limit: number = 10): Promise<IGame[]> {
    return await Game.find({
      status: GameStatus.COMPLETED,
      rewardAmount: { $gt: 0 },
    })
      .sort({ rewardAmount: -1 })
      .limit(limit)
      .populate('userId', 'walletAddress username')
      .select('-__v');
  }

  async getGameStats(): Promise<{
    totalGames: number;
    totalWagered: number;
    totalWon: number;
    activeGames: number;
  }> {
    const [totalGames, totalWagered, totalWon, activeGames] = await Promise.all([
      Game.countDocuments(),
      Game.aggregate([
        { $group: { _id: null, total: { $sum: '$betAmount' } } },
      ]).then((result) => result[0]?.total || 0),
      Game.aggregate([
        { $group: { _id: null, total: { $sum: '$rewardAmount' } } },
      ]).then((result) => result[0]?.total || 0),
      Game.countDocuments({ status: GameStatus.PLAYING }),
    ]);

    return {
      totalGames,
      totalWagered,
      totalWon,
      activeGames,
    };
  }
}

export const gameService = new GameService();

