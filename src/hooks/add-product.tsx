import axios from "axios";

const useAddProduct = () => {
  const url = import.meta.env.VITE_API_URL;

  const addProduct = async (product: {
    name: string;
    price: number;
    quantity: number;
    description?: string;
  }) => {
    console.log(product);
    await axios.post(`${url}/products`, product);
    alert("Product added successfully");
  };

  return addProduct;
};

export default useAddProduct;
