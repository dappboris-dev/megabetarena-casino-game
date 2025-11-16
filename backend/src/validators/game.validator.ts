import { z } from 'zod';
import { GameType } from '../models/game.model';

export const playGameSchema = z.object({
  gameType: z.nativeEnum(GameType),
  betAmount: z.number().positive('Bet amount must be positive'),
  playerChoice: z.number().int().min(0).max(1).optional(),
});

export const claimRewardSchema = z.object({
  gameId: z.string().min(1, 'Game ID is required'),
});

export type PlayGameInput = z.infer<typeof playGameSchema>;
export type ClaimRewardInput = z.infer<typeof claimRewardSchema>;

