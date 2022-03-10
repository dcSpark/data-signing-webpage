import { Bifrost } from '@saib/cardano-bifrost';

export const getUsableWallet = () => {
  const wallets = Bifrost.getWallets();
  const flintWallet = wallets.filter(w => w.id === "flint");
  if (flintWallet.length > 0) return flintWallet[0];
  else if (wallets.length > 0) return wallets[0];
  else return null;
}