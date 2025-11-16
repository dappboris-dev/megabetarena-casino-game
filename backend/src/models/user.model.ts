import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  walletAddress: string;
  username?: string;
  email?: string;
  avatar?: string;
  totalWagered: number;
  totalWon: number;
  totalGames: number;
  winRate: number;
  vipLevel: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    walletAddress: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    username: {
      type: String,
      sparse: true,
    },
    email: {
      type: String,
      sparse: true,
    },
    avatar: {
      type: String,
    },
    totalWagered: {
      type: Number,
      default: 0,
    },
    totalWon: {
      type: Number,
      default: 0,
    },
    totalGames: {
      type: Number,
      default: 0,
    },
    winRate: {
      type: Number,
      default: 0,
    },
    vipLevel: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Calculate win rate before saving
UserSchema.pre('save', function (next) {
  if (this.totalGames > 0) {
    this.winRate = (this.totalWon / this.totalGames) * 100;
  }
  next();
});

export const User = mongoose.model<IUser>('User', UserSchema);

