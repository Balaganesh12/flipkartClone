import { useEffect, useState } from 'react';

const useHomeStyle = () => {
  const [homeStyle, sethomeStyle] = useState([]);
  const [homeStyleLoading, setHomeStyleLoading] = useState(true);
  const [homeStyleError, setHomeStyleError] = useState(null);

  const fetchCategory = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/home-decoration');
      const data = await response.json();
      sethomeStyle(data.products);
    } catch (err) {
      setHomeStyleError(err.message || 'Something went wrong');
    } finally {
      setHomeStyleLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return { homeStyle, homeStyleLoading, homeStyleError };
};

export default useHomeStyle;
