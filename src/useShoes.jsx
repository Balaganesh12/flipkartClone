import { useEffect, useState } from 'react';

const useShoes = () => {
  const [shoes, setShoes] = useState([]);
  const [shoesLoading, setShoesLoading] = useState(true);
  const [shoesError, setShoesError] = useState(null);

  const fetchCategory = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/womens-shoes');
      const data = await response.json();
      setShoes(data.products);
    } catch (err) {
      setShoesError(err.message || 'Something went wrong');
    } finally {
      setShoesLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return { shoes, shoesLoading, shoesError };
};

export default useShoes;
