import { useEffect, useState } from 'react';

const useGroceries = () => {
  const [groceries, setGroceries] = useState([]);
  const [groceriesLoading, setGroceriesLoading] = useState(true);
  const [groceriesError, setGroceriesError] = useState(null);

  const fetchCategory = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/groceries');
      const data = await response.json();
      setGroceries(data.products);
    } catch (err) {
      setGroceriesError(err.message || 'Something went wrong');
    } finally {
      setGroceriesLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return { groceries, groceriesLoading, groceriesError };
};

export default useGroceries;
