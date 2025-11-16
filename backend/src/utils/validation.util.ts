import { PublicKey } from '@solana/web3.js';

export const isValidSolanaAddress = (address: string): boolean => {
  try {
    new PublicKey(address);
    return true;
  } catch {
    return false;
  }
};

export const isValidAmount = (amount: number, min: number, max: number): boolean => {
  return amount >= min && amount <= max && amount > 0;
};

export const sanitizeWalletAddress = (address: string): string => {
  return address.trim().toLowerCase();
};

