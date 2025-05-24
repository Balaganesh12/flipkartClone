import { useEffect, useState } from 'react';

const useSmartPhoneProduct = () => {
  const [smartPhone, setSmartPhone] = useState([]);
  const [smartPhoneLoading, setSmartPhoneLoading] = useState(true);
  const [smartPhoneError, setSmartPhoneError] = useState(null);

  const fetchCategory = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/smartphones');
      const data = await response.json();
      setSmartPhone(data.products);
    } catch (err) {
      setSmartPhoneError(err.message || 'Something went wrong');
    } finally {
      setSmartPhoneLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return { smartPhone, smartPhoneLoading, smartPhoneError };
};

export default useSmartPhoneProduct;
