import { useWallet } from './wallet'; // Assuming the useWallet hook is imported from a file named 'wallet.js'
import { useChainSelector } from './chainSelector'; // Assuming the useChainSelector hook is imported from a file named 'chainSelector.js'

export const useWalletAndChain = () => {
  const { walletAddress, isWalletConnected, ...walletData } = useWallet();
  const { openChainSelector, setOpenChainSelector, chains } = useChainSelector();

  return {
    walletAddress,
    isWalletConnected,
    walletData,
    openChainSelector,
    setOpenChainSelector,
    chains,
  };
};