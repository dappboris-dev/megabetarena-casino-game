import { Request, Response, NextFunction } from 'express';
import { transactionService } from '../services/transaction.service';
import { createTransactionSchema } from '../validators/transaction.validator';
import { sendSuccess, sendError } from '../utils/response.util';
import { AuthRequest } from '../middleware/auth.middleware';

export class TransactionController {
  async createTransaction(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.userId!;
      const walletAddress = req.walletAddress!;
      const validated = createTransactionSchema.parse(req.body);
      
      const transaction = await transactionService.createTransaction(
        userId,
        walletAddress,
        validated.type,
        validated.amount,
        validated.signature
      );
      
      sendSuccess(res, {
        transactionId: transaction.transactionId,
        type: transaction.type,
        status: transaction.status,
        amount: transaction.amount,
        signature: transaction.signature,
        createdAt: transaction.createdAt,
      }, 'Transaction created successfully');
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return sendError(res, error.errors[0].message, 400);
      }
      next(error);
    }
  }

  async getTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const { transactionId } = req.params;
      const transaction = await transactionService.getTransactionById(transactionId);
      
      sendSuccess(res, {
        transactionId: transaction.transactionId,
        type: transaction.type,
        status: transaction.status,
        amount: transaction.amount,
        signature: transaction.signature,
        blockTime: transaction.blockTime,
        slot: transaction.slot,
        createdAt: transaction.createdAt,
      });
    } catch (error) {
      next(error);
    }
  }

  async getUserTransactions(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.userId!;
      const limit = parseInt(req.query.limit as string) || 50;
      const skip = parseInt(req.query.skip as string) || 0;
      
      const transactions = await transactionService.getUserTransactions(userId, limit, skip);
      
      sendSuccess(res, {
        transactions: transactions.map(tx => ({
          transactionId: tx.transactionId,
          type: tx.type,
          status: tx.status,
          amount: tx.amount,
          signature: tx.signature,
          createdAt: tx.createdAt,
        })),
        total: transactions.length,
      });
    } catch (error) {
      next(error);
    }
  }

  async verifyTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const { signature } = req.body;
      
      if (!signature) {
        return sendError(res, 'Transaction signature is required', 400);
      }
      
      const isValid = await transactionService.verifyTransaction(signature);
      
      sendSuccess(res, {
        signature,
        isValid,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const transactionController = new TransactionController();

