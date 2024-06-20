import { useState } from "react";
import { Product } from "../types/Product";

export type EditModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
};

export default function EditModal({
  product,
  isOpen,
  onClose,
  onSave,
}: EditModalProps) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [description, setDescription] = useState(product.description);

  return (
    isOpen && (
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10`}
      >
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const updatedProduct = {
                ...product,
                name,
                price,
                quantity,
                description,
              };
              onSave(updatedProduct);
              onClose();
            }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-lg font-semibold">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-lg font-semibold">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-lg font-semibold"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
