import { useEffect, useState } from 'react';

const useLabtopProduct = () => {
  const [labtops, setLabtops] = useState([]);
  const [labtopsLoading, setLabtopsLoading] = useState(true);
  const [labtopsError, setLabtopsError] = useState(null);

  const fetchCategory = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/laptops');
      const data = await response.json();
      setLabtops(data.products);
    } catch (err) {
      setLabtopsError(err.message || 'Something went wrong');
    } finally {
      setLabtopsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return { labtops, labtopsLoading, labtopsError };
};

export default useLabtopProduct;
