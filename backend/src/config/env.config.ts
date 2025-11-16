import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '3001', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // MongoDB
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/megabetarena',
  
  // JWT
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  
  // CORS
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  
  // Solana
  solanaRpcUrl: process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com',
  programId: process.env.PROGRAM_ID || '3Sh6Wrj72E7CUJ9EV5g4KPLEo69sxDs6gPZXZd2Tawx1',
  adminPrivateKey: process.env.ADMIN_PRIVATE_KEY,
  globalAuthoritySeed: process.env.GLOBAL_AUTHORITY_SEED || 'global-authority',
  vaultSeed: process.env.VAULT_SEED || 'vault-authority',
  
  // Game Settings
  minBetAmount: parseFloat(process.env.MIN_BET_AMOUNT || '0.05'),
  maxBetAmount: parseFloat(process.env.MAX_BET_AMOUNT || '10'),
  houseEdge: parseFloat(process.env.HOUSE_EDGE || '0.03'), // 3%
};

