import { useState } from "react";

type AddModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: {
    name: string;
    price: number;
    quantity: number;
    description: string;
  }) => void;
};

export default function AddModal({ isOpen, onClose, onSave }: AddModalProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [priceError, setPriceError] = useState(false);

  return (
    isOpen && (
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10`}
      >
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newProduct = {
                name,
                price,
                quantity,
                description,
              };
              onSave(newProduct);
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
                onChange={(e) => {
                  if (e.target.value.length < 1) {
                    setNameError(true);
                    setDisabled(true);
                    setName(e.target.value);
                  } else {
                    setNameError(false);
                    setDisabled(false);
                    setName(e.target.value);
                  }
                }}
                className={`w-full p-2 border border-gray-300 rounded-md ${
                  nameError ? "border-red-500" : ""
                }`}
              />
              {nameError && (
                <p className="text-red-500 text-sm">
                  Name is required &#x26A0;
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-lg font-semibold">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => {
                  if (+e.target.value < 1) {
                    setPriceError(true);
                    setDisabled(true);
                    setPrice(+e.target.value);
                  } else {
                    setPriceError(false);
                    setDisabled(false);
                    setPrice(+e.target.value);
                  }
                }}
                className={`w-full p-2 border border-gray-300 rounded-md ${
                  priceError ? "border-red-500" : ""
                }`}
              />
              {priceError && (
                <p className="text-red-500 text-sm">
                  Price must be greater than 0 &#x26A0;
                </p>
              )}
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
                disabled={disabled}
                className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
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
