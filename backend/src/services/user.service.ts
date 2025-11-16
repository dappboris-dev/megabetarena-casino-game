import { User, IUser } from '../models/user.model';
import { CustomError } from '../middleware/error-handler';
import { sanitizeWalletAddress } from '../utils/validation.util';

export class UserService {
  async findOrCreateUser(walletAddress: string): Promise<IUser> {
    const address = sanitizeWalletAddress(walletAddress);
    
    let user = await User.findOne({ walletAddress: address });
    
    if (!user) {
      user = new User({
        walletAddress: address,
        totalWagered: 0,
        totalWon: 0,
        totalGames: 0,
        winRate: 0,
        vipLevel: 0,
      });
      await user.save();
    }
    
    return user;
  }

  async getUserById(userId: string): Promise<IUser> {
    const user = await User.findById(userId);
    if (!user) {
      throw new CustomError('User not found', 404);
    }
    return user;
  }

  async getUserByWallet(walletAddress: string): Promise<IUser | null> {
    const address = sanitizeWalletAddress(walletAddress);
    return await User.findOne({ walletAddress: address });
  }

  async updateUser(userId: string, updateData: Partial<IUser>): Promise<IUser> {
    const user = await this.getUserById(userId);
    
    Object.assign(user, updateData);
    await user.save();
    
    return user;
  }

  async updateUserStats(
    userId: string,
    wagered: number,
    won: number,
    gamesPlayed: number
  ): Promise<IUser> {
    const user = await this.getUserById(userId);
    
    user.totalWagered += wagered;
    user.totalWon += won;
    user.totalGames += gamesPlayed;
    
    await user.save();
    return user;
  }

  async getLeaderboard(limit: number = 100): Promise<IUser[]> {
    return await User.find()
      .sort({ totalWagered: -1 })
      .limit(limit)
      .select('-__v');
  }

  async getTopWinners(limit: number = 10): Promise<IUser[]> {
    return await User.find()
      .sort({ totalWon: -1 })
      .limit(limit)
      .select('-__v');
  }
}

export const userService = new UserService();

