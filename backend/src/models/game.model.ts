import mongoose, { Schema, Document } from 'mongoose';

export enum GameType {
  COINFLIP = 'coinflip',
  SLOTS = 'slots',
  DICE = 'dice',
  BLACKJACK = 'blackjack',
}

export enum GameStatus {
  PENDING = 'pending',
  PLAYING = 'playing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export interface IGame extends Document {
  gameId: string;
  userId: string;
  walletAddress: string;
  gameType: GameType;
  status: GameStatus;
  betAmount: number; // in lamports
  rewardAmount: number; // in lamports
  playerChoice?: number;
  result?: number;
  transactionSignature?: string;
  claimTransactionSignature?: string;
  isClaimed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const GameSchema = new Schema<IGame>(
  {
    gameId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    userId: {
      type: String,
      required: true,
      ref: 'User',
      index: true,
    },
    walletAddress: {
      type: String,
      required: true,
      index: true,
    },
    gameType: {
      type: String,
      enum: Object.values(GameType),
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: Object.values(GameStatus),
      default: GameStatus.PENDING,
      index: true,
    },
    betAmount: {
      type: Number,
      required: true,
    },
    rewardAmount: {
      type: Number,
      default: 0,
    },
    playerChoice: {
      type: Number,
    },
    result: {
      type: Number,
    },
    transactionSignature: {
      type: String,
      index: true,
    },
    claimTransactionSignature: {
      type: String,
    },
    isClaimed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Game = mongoose.model<IGame>('Game', GameSchema);

