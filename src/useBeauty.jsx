import { useEffect, useState } from 'react';

const useBeautyProduct = () => {
  const [beauty, setBeauty] = useState([]);
  const [beautyLoading, setBeautyLoading] = useState(true);
  const [beautyError, setBeautyError] = useState(null);

  const fetchCategory = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/beauty');
      const data = await response.json();
      setBeauty(data.products);
    } catch (err) {
      setBeautyError(err.message || 'Something went wrong');
    } finally {
      setBeautyLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return { beauty, beautyLoading, beautyError };
};

export default useBeautyProduct;
