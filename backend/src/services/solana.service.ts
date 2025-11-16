import { Connection, PublicKey, Keypair, SystemProgram } from '@solana/web3.js';
import { Program, AnchorProvider, Wallet } from '@coral-xyz/anchor';
import { readFileSync } from 'fs';
import { join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

let connection: Connection;
let program: Program;
let provider: AnchorProvider;

export const initializeSolana = () => {
  try {
    const rpcUrl = process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com';
    connection = new Connection(rpcUrl, 'confirmed');

    // Load admin wallet if available
    let adminWallet: Wallet | null = null;
    if (process.env.ADMIN_PRIVATE_KEY) {
      try {
        const privateKeyArray = JSON.parse(process.env.ADMIN_PRIVATE_KEY);
        const keypair = Keypair.fromSecretKey(Uint8Array.from(privateKeyArray));
        adminWallet = {
          publicKey: keypair.publicKey,
          signTransaction: async (tx) => {
            tx.sign(keypair);
            return tx;
          },
          signAllTransactions: async (txs) => {
            return txs.map(tx => {
              tx.sign(keypair);
              return tx;
            });
          },
        };
      } catch (error) {
        console.warn('⚠️  Could not load admin wallet:', error);
      }
    }

    // Create provider
    if (adminWallet) {
      provider = new AnchorProvider(connection, adminWallet, {
        commitment: 'confirmed',
      });
    } else {
      // Use a dummy wallet for read-only operations
      const dummyKeypair = Keypair.generate();
      provider = new AnchorProvider(
        connection,
        {
          publicKey: dummyKeypair.publicKey,
          signTransaction: async (tx) => tx,
          signAllTransactions: async (txs) => txs,
        },
        { commitment: 'confirmed' }
      );
    }

    // Load program IDL
    const programId = new PublicKey(
      process.env.PROGRAM_ID || '3Sh6Wrj72E7CUJ9EV5g4KPLEo69sxDs6gPZXZd2Tawx1'
    );

    // Try to load IDL from file or use a minimal one
    let idl: any;
    try {
      const idlPath = join(__dirname, '../../../contracts/solana/target/idl/coinflip.json');
      idl = JSON.parse(readFileSync(idlPath, 'utf-8'));
    } catch (error) {
      console.warn('⚠️  Could not load IDL file, using program ID only');
      idl = null;
    }

    if (idl) {
      program = new Program(idl, programId, provider);
    }

    console.log('✅ Solana connection initialized');
    console.log(`📡 RPC URL: ${rpcUrl}`);
    console.log(`🔑 Program ID: ${programId.toString()}`);
  } catch (error) {
    console.error('❌ Failed to initialize Solana:', error);
    throw error;
  }
};

export const getConnection = (): Connection => {
  if (!connection) {
    throw new Error('Solana connection not initialized');
  }
  return connection;
};

export const getProgram = (): Program => {
  if (!program) {
    throw new Error('Solana program not initialized');
  }
  return program;
};

export const getProvider = (): AnchorProvider => {
  if (!provider) {
    throw new Error('Solana provider not initialized');
  }
  return provider;
};

// Helper functions for PDA derivation
export const getGlobalAuthorityPDA = (): [PublicKey, number] => {
  const seed = process.env.GLOBAL_AUTHORITY_SEED || 'global-authority';
  return PublicKey.findProgramAddressSync(
    [Buffer.from(seed)],
    new PublicKey(process.env.PROGRAM_ID || '3Sh6Wrj72E7CUJ9EV5g4KPLEo69sxDs6gPZXZd2Tawx1')
  );
};

export const getVaultPDA = (): [PublicKey, number] => {
  const seed = process.env.VAULT_SEED || 'vault-authority';
  return PublicKey.findProgramAddressSync(
    [Buffer.from(seed)],
    new PublicKey(process.env.PROGRAM_ID || '3Sh6Wrj72E7CUJ9EV5g4KPLEo69sxDs6gPZXZd2Tawx1')
  );
};

export const getPlayerPoolPDA = (playerPubkey: PublicKey): [PublicKey, number] => {
  return PublicKey.findProgramAddressSync(
    [playerPubkey.toBuffer()],
    new PublicKey(process.env.PROGRAM_ID || '3Sh6Wrj72E7CUJ9EV5g4KPLEo69sxDs6gPZXZd2Tawx1')
  );
};

// Convert SOL to lamports
export const solToLamports = (sol: number): number => {
  return Math.floor(sol * 1_000_000_000);
};

// Convert lamports to SOL
export const lamportsToSol = (lamports: number): number => {
  return lamports / 1_000_000_000;
};

