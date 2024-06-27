import Header from "./components/header";
import ProductList from "./components/product-list";
import ProductItem from "./components/product-item";
import useFetchProducts from "./hooks/fetch-products";
import { useState } from "react";
import EditModal from "./components/edit-modal";
import { Product } from "./types/Product";
import useEditProduct from "./hooks/edit-product";
import useDeleteProduct from "./hooks/delete-product";
import AddModal from "./components/add-modal";
import useAddProduct from "./hooks/add-product";

const App = () => {
  const { products, setTrigger, trigger } = useFetchProducts();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editProduct, setEditProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    quantity: 0,
    description: "",
  });
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleEditProduct = useEditProduct(editProduct);

  const handleDeleteProduct = useDeleteProduct();

  const handleSearch = (search: string) => {
    if (search === "") {
      return;
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleAddProduct = useAddProduct();

  const renderProducts = () => {
    if (search === "") {
      return products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={(id) => {
            handleDeleteProduct(id);
            setTrigger(!trigger);
          }}
          onEdit={() => {
            setShowEditModal(true);
            setEditProduct(product);
          }}
        />
      ));
    } else {
      return filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={(id) => {
            handleDeleteProduct(id);
            setTrigger(!trigger);
          }}
          onEdit={() => {
            setShowEditModal(true);
            setEditProduct(product);
            setTrigger(!trigger);
          }}
        />
      ));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen bg-slate-300">
        <Header />
        <div className="flex justify-end w-1/2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch(e.target.value);
            }}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end w-1/2 mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setShowAddModal(true)}
          >
            Add a product
          </button>
        </div>
        <ProductList>
          <>{renderProducts()}</>
        </ProductList>
      </div>
      {showEditModal && (
        <EditModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          onSave={(product) => {
            console.log(product);
            handleEditProduct(product);
            setShowEditModal(false);
            setTrigger(!trigger);
          }}
          product={editProduct}
        />
      )}
      {showAddModal && (
        <AddModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSave={(product) => {
            console.log(product);
            handleAddProduct(product);
            setShowAddModal(false);
            setTrigger(!trigger);
          }}
        />
      )}
    </>
  );
};

export default App;
