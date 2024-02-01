import { useState, useEffect } from 'react';
import { ChainScanner } from './utils'; // Assuming ChainScanner is imported from a file named 'utils.js'

export const useBurnTransactions = (walletChainId) => {
  const [burnTransactions, setBurnTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      const transactions = await ChainScanner.fetchAllTxPromises(walletChainId);
      setBurnTransactions(transactions);
    }

    fetchTransactions();
  }, [walletChainId]);

  return { burnTransactions };
};