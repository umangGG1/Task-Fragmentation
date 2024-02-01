import { useState, useEffect } from 'react';
import { fetchSupplies } from './api'; // Assuming the API call is imported from a file named 'api.js'

export const useAppSupplies = (includeAll = false) => {
  const [supplies, setSupplies] = useState({});
  const [allSupplies, setAllSupplies] = useState([]);
  const [suppliesChain, setSuppliesChain] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedSupplies = await fetchSupplies();
      setSupplies(fetchedSupplies);
      setAllSupplies(fetchedSupplies);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!includeAll) {
      const filteredSupplies = allSupplies.find((s) => s.chainId === suppliesChain?.id);
      setSupplies(filteredSupplies || {});
    }
  }, [allSupplies, suppliesChain, includeAll]);

  return { supplies, allSupplies, suppliesChain, setSuppliesChain, fetchSupplies };
};