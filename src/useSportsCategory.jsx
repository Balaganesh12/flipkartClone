import { useEffect, useState } from 'react';

const useSportsProduct = () => {
  const [sports, setSports] = useState([]);
  const [sportsLoading, setSportsLoading] = useState(true);
  const [sportsError, setSportsError] = useState(null);

  const fetchCategory = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/sports-accessories');
      const data = await response.json();
      setSports(data.products);
    } catch (err) {
      setSportsError(err.message || 'Something went wrong');
    } finally {
      setSportsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return { sports, sportsLoading, sportsError };
};

export default useSportsProduct;
