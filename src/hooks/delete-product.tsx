import axios from "axios";

const useDeleteProduct = () => {
  const url = import.meta.env.VITE_API_URL;
  const handleDeleteProduct = async (id: number) => {
    await axios.delete(`${url}/products/${id}`);
    alert("Product deleted successfully");
  };

  return handleDeleteProduct;
};

export default useDeleteProduct;
