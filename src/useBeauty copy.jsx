import { useEffect, useState } from 'react';

const useFurniture = () => {
  const [furniture, setFurniture] = useState([]);
  const [furnitureLoading, setFurnitureLoading] = useState(true);
  const [furnitureError, setFurnitureError] = useState(null);

  const fetchCategory = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/furniture');
      const data = await response.json();
      setFurniture(data.products);
    } catch (err) {
      setFurnitureError(err.message || 'Something went wrong');
    } finally {
      setFurnitureLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return { furniture, furnitureLoading, furnitureError };
};

export default useFurniture;
