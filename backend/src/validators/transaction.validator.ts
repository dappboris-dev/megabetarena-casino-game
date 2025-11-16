import { z } from 'zod';
import { TransactionType } from '../models/transaction.model';

export const createTransactionSchema = z.object({
  type: z.nativeEnum(TransactionType),
  amount: z.number().positive('Amount must be positive'),
  signature: z.string().min(1, 'Transaction signature is required'),
});

export type CreateTransactionInput = z.infer<typeof createTransactionSchema>;

