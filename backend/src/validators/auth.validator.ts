import { z } from 'zod';
import { isValidSolanaAddress } from '../utils/validation.util';

export const walletAuthSchema = z.object({
  walletAddress: z
    .string()
    .min(32, 'Invalid wallet address')
    .refine((addr) => isValidSolanaAddress(addr), {
      message: 'Invalid Solana wallet address',
    }),
  signature: z.string().min(1, 'Signature is required'),
  message: z.string().optional(),
});

export const updateUserSchema = z.object({
  username: z.string().min(3).max(30).optional(),
  email: z.string().email().optional(),
  avatar: z.string().url().optional(),
});

export type WalletAuthInput = z.infer<typeof walletAuthSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;

