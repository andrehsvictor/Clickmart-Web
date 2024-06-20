import { Product } from "../types/Product";

type ProductItemProps = {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};

export default function ProductItem({
  product,
  onEdit,
  onDelete,
}: ProductItemProps) {
  return (
    <li className="bg-white p-4 rounded-lg shadow-md h-max flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-base mt-2">${product.price}</p>
        <p className="text-base mt-2">Quantity: {product.quantity}</p>
        <p className="text-base mt-2">{product.description}</p>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
          onClick={() => onEdit(product)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md ml-4"
          onClick={() => onDelete(product?.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
