import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0);
  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${url}/products`)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [trigger]);

  return { products, isLoading, error, setTrigger, trigger };
};

export default useFetchProducts;
