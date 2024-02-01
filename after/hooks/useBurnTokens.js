import { useEthersSigner } from './ethers'; // Assuming the useEthersSigner hook is imported from a file named 'ethers.js'
import { oftAbi } from './abi'; // Assuming the oftAbi is imported from a file named 'abi.js'

export const useBurnTokens = () => {
  const ethersSigner = useEthersSigner();

  const executeBurn = async (amount, tokenAddress) => {
    try {
      const newTokenAddress = tokenAddress;
      const oftTokenContract = new Contract(
        newTokenAddress,
        oftAbi,
        ethersSigner
      );

      const burnTx = await oftTokenContract.burn(amount);
      await burnTx.wait();

      return burnTx.hash;
    } catch (error) {
      console.error('Error burning tokens:', error);
      throw error; // Re-throw to propagate errors to components
    }
  };

  return { executeBurn };
};