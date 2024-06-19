import axios from "axios";
import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${url}/products`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { products, isLoading, error };
};

export default useFetchProducts;
