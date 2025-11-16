import { PublicKey, Transaction, SystemProgram, Keypair } from '@solana/web3.js';
import { Program, AnchorProvider, BN } from '@coral-xyz/anchor';
import { getConnection, getProgram, getPlayerPoolPDA, getGlobalAuthorityPDA, getVaultPDA, solToLamports, lamportsToSol } from './solana.service';
import { CustomError } from '../middleware/error-handler';
import { GameType } from '../models/game.model';

export class SolanaGameService {
  async playCoinflip(
    playerPubkey: PublicKey,
    setNumber: number, // 0: Tail, 1: Head
    deposit: number // in SOL
  ): Promise<string> {
    try {
      const program = getProgram();
      const connection = getConnection();
      
      const depositLamports = solToLamports(deposit);
      
      // Get PDAs
      const [globalAuthority] = getGlobalAuthorityPDA();
      const [rewardVault] = getVaultPDA();
      const [playerPool] = getPlayerPoolPDA(playerPubkey);
      
      // Get loyalty wallet from global authority
      // This would need to be fetched from the on-chain account
      const loyaltyWallet = new PublicKey(process.env.LOYALTY_WALLET || playerPubkey.toString());
      
      // Build transaction
      const tx = await program.methods
        .playGame(new BN(setNumber), new BN(depositLamports))
        .accounts({
          owner: playerPubkey,
          playerPool: playerPool,
          globalAuthority: globalAuthority,
          rewardVault: rewardVault,
          loyaltyWallet: loyaltyWallet,
          systemProgram: SystemProgram.programId,
        })
        .transaction();
      
      // Note: In production, the client should sign this transaction
      // This is just for demonstration
      return tx.toString();
    } catch (error: any) {
      throw new CustomError(
        `Failed to play coinflip: ${error.message}`,
        500
      );
    }
  }

  async claimReward(playerPubkey: PublicKey): Promise<string> {
    try {
      const program = getProgram();
      
      const [globalAuthority] = getGlobalAuthorityPDA();
      const [rewardVault] = getVaultPDA();
      const [playerPool] = getPlayerPoolPDA(playerPubkey);
      
      const tx = await program.methods
        .claimReward()
        .accounts({
          owner: playerPubkey,
          playerPool: playerPool,
          globalAuthority: globalAuthority,
          rewardVault: rewardVault,
          systemProgram: SystemProgram.programId,
        })
        .transaction();
      
      return tx.toString();
    } catch (error: any) {
      throw new CustomError(
        `Failed to claim reward: ${error.message}`,
        500
      );
    }
  }

  async getPlayerPoolData(playerPubkey: PublicKey): Promise<any> {
    try {
      const program = getProgram();
      const [playerPool] = getPlayerPoolPDA(playerPubkey);
      
      const account = await program.account.playerPool.fetch(playerPool);
      return {
        player: account.player.toString(),
        round: account.round.toString(),
        gameData: {
          playTime: account.gameData.playTime.toString(),
          amount: lamportsToSol(Number(account.gameData.amount)),
          rewardAmount: lamportsToSol(Number(account.gameData.rewardAmount)),
          setNum: account.gameData.setNum.toString(),
          rand: account.gameData.rand.toString(),
        },
        winTimes: account.winTimes.toString(),
        receivedReward: lamportsToSol(Number(account.reveivedReward)),
        claimableReward: lamportsToSol(Number(account.claimableReward)),
      };
    } catch (error: any) {
      if (error.message.includes('Account does not exist')) {
        return null;
      }
      throw new CustomError(
        `Failed to fetch player pool: ${error.message}`,
        500
      );
    }
  }

  async getGlobalAuthorityData(): Promise<any> {
    try {
      const program = getProgram();
      const [globalAuthority] = getGlobalAuthorityPDA();
      
      const account = await program.account.globalPool.fetch(globalAuthority);
      return {
        superAdmin: account.superAdmin.toString(),
        loyaltyWallet: account.loyaltyWallet.toString(),
        loyaltyFee: account.loyaltyFee.toString(),
        totalRound: account.totalRound.toString(),
      };
    } catch (error: any) {
      throw new CustomError(
        `Failed to fetch global authority: ${error.message}`,
        500
      );
    }
  }
}

export const solanaGameService = new SolanaGameService();

