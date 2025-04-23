export enum CryptoType {
  USDT = 'usdt',
  USDC = 'usdc'
}

export enum Network {
  ETHEREUM = 'ethereum',
  POLYGON = 'polygon',
  BSC = 'bsc'
}

export interface PurchaseDetails {
  cryptoType: CryptoType;
  network: Network;
  walletAddress: string;
  amount: number;
  localCurrency: string;
  estimatedCryptoAmount: number;
  feeAmount: number;
  totalAmount: number;
  exchangeRate: number;
}