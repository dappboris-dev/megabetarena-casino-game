import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { userService } from '../services/user.service';
import { walletAuthSchema } from '../validators/auth.validator';
import { sendSuccess, sendError } from '../utils/response.util';
import { CustomError } from '../middleware/error-handler';
import { config } from '../config/env.config';
import { AuthRequest } from '../middleware/auth.middleware';

export class AuthController {
  async walletAuth(req: Request, res: Response, next: NextFunction) {
    try {
      const validated = walletAuthSchema.parse(req.body);
      
      // In production, verify the signature here
      // For now, we'll just authenticate the wallet
      const user = await userService.findOrCreateUser(validated.walletAddress);
      
      const token = jwt.sign(
        {
          userId: user._id.toString(),
          walletAddress: user.walletAddress,
        },
        config.jwtSecret,
        { expiresIn: config.jwtExpiresIn }
      );
      
      sendSuccess(res, {
        token,
        user: {
          id: user._id,
          walletAddress: user.walletAddress,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          totalWagered: user.totalWagered,
          totalWon: user.totalWon,
          totalGames: user.totalGames,
          winRate: user.winRate,
          vipLevel: user.vipLevel,
        },
      }, 'Authentication successful');
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return sendError(res, error.errors[0].message, 400);
      }
      next(error);
    }
  }

  async getProfile(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.userId!;
      const user = await userService.getUserById(userId);
      
      sendSuccess(res, {
        id: user._id,
        walletAddress: user.walletAddress,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        totalWagered: user.totalWagered,
        totalWon: user.totalWon,
        totalGames: user.totalGames,
        winRate: user.winRate,
        vipLevel: user.vipLevel,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.userId!;
      const { updateUserSchema } = await import('../validators/auth.validator');
      const validated = updateUserSchema.parse(req.body);
      
      const user = await userService.updateUser(userId, validated);
      
      sendSuccess(res, {
        id: user._id,
        walletAddress: user.walletAddress,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      }, 'Profile updated successfully');
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return sendError(res, error.errors[0].message, 400);
      }
      next(error);
    }
  }
}

export const authController = new AuthController();

