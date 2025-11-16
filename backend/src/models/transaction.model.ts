import mongoose, { Schema, Document } from 'mongoose';

export enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
  BET = 'bet',
  WIN = 'win',
  FEE = 'fee',
}

export enum TransactionStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  FAILED = 'failed',
}

export interface ITransaction extends Document {
  transactionId: string;
  userId: string;
  walletAddress: string;
  type: TransactionType;
  status: TransactionStatus;
  amount: number; // in lamports
  signature: string;
  blockTime?: number;
  slot?: number;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema = new Schema<ITransaction>(
  {
    transactionId: {
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
    type: {
      type: String,
      enum: Object.values(TransactionType),
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: Object.values(TransactionStatus),
      default: TransactionStatus.PENDING,
      index: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    signature: {
      type: String,
      required: true,
      index: true,
    },
    blockTime: {
      type: Number,
    },
    slot: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const Transaction = mongoose.model<ITransaction>('Transaction', TransactionSchema);

