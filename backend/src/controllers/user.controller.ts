import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/user.service';
import { sendSuccess, sendError } from '../utils/response.util';
import { AuthRequest } from '../middleware/auth.middleware';

export class UserController {
  async getLeaderboard(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = parseInt(req.query.limit as string) || 100;
      const users = await userService.getLeaderboard(limit);
      
      sendSuccess(res, {
        leaderboard: users.map((user, index) => ({
          rank: index + 1,
          walletAddress: user.walletAddress,
          username: user.username,
          totalWagered: user.totalWagered,
          totalWon: user.totalWon,
          totalGames: user.totalGames,
          winRate: user.winRate,
          vipLevel: user.vipLevel,
        })),
      });
    } catch (error) {
      next(error);
    }
  }

  async getTopWinners(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const users = await userService.getTopWinners(limit);
      
      sendSuccess(res, {
        winners: users.map((user, index) => ({
          rank: index + 1,
          walletAddress: user.walletAddress,
          username: user.username,
          totalWon: user.totalWon,
          totalGames: user.totalGames,
          winRate: user.winRate,
        })),
      });
    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UserController();

