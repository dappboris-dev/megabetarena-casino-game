import { Transaction, ITransaction, TransactionType, TransactionStatus } from '../models/transaction.model';
import { CustomError } from '../middleware/error-handler';
import { v4 as uuidv4 } from 'uuid';
import { getConnection } from './solana.service';

export class TransactionService {
  async createTransaction(
    userId: string,
    walletAddress: string,
    type: TransactionType,
    amount: number,
    signature: string
  ): Promise<ITransaction> {
    const transactionId = uuidv4();
    
    // Verify transaction on Solana
    const connection = getConnection();
    let transactionData: { blockTime?: number; slot?: number } = {};
    
    try {
      const tx = await connection.getTransaction(signature, {
        commitment: 'confirmed',
      });
      
      if (tx) {
        transactionData = {
          blockTime: tx.blockTime || undefined,
          slot: tx.slot || undefined,
        };
      }
    } catch (error) {
      console.warn('Could not fetch transaction details:', error);
    }
    
    const transaction = new Transaction({
      transactionId,
      userId,
      walletAddress,
      type,
      status: TransactionStatus.PENDING,
      amount,
      signature,
      ...transactionData,
    });
    
    await transaction.save();
    return transaction;
  }

  async getTransactionById(transactionId: string): Promise<ITransaction> {
    const transaction = await Transaction.findOne({ transactionId });
    if (!transaction) {
      throw new CustomError('Transaction not found', 404);
    }
    return transaction;
  }

  async getUserTransactions(
    userId: string,
    limit: number = 50,
    skip: number = 0
  ): Promise<ITransaction[]> {
    return await Transaction.find({ userId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
  }

  async updateTransactionStatus(
    transactionId: string,
    status: TransactionStatus
  ): Promise<ITransaction> {
    const transaction = await this.getTransactionById(transactionId);
    transaction.status = status;
    await transaction.save();
    return transaction;
  }

  async verifyTransaction(signature: string): Promise<boolean> {
    try {
      const connection = getConnection();
      const tx = await connection.getTransaction(signature, {
        commitment: 'confirmed',
      });
      return tx !== null;
    } catch {
      return false;
    }
  }
}

export const transactionService = new TransactionService();

