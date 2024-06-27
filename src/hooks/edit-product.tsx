import { useState } from "react";
import { Product } from "../types/Product";
import axios from "axios";

const useEditProduct = (product: Product) => {
  const url = import.meta.env.VITE_API_URL;
  const [newProduct, setProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    quantity: 0,
    description: "",
  });

  const handleEditProduct = async (product: Product) => {
    setProduct(product);
    await axios.put(`${url}/products/${product.id}`, product);
    alert("Product updated successfully");
  };

  return handleEditProduct;
};

export default useEditProduct;
