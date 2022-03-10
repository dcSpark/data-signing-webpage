import { Bifrost } from '@saib/cardano-bifrost';

export const getUsableWallet = () => {
  const wallets = Bifrost.getWallets();
  if (wallets.filter(w => w.id === "flint").length > 0) return "flint";
  else if (wallets.length > 0) return wallets[0].id;
  else return null;
}