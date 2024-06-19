import useFetchProducts from "./hooks/useFetchProducts";

export default function App() {
  const { products, isLoading, error } = useFetchProducts();

  return (
    <div className="flex flex-col items-center h-screen bg-gray-200 p-4">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <p className="text-lg mt-2">to Clickmart product management system</p>
      <ul className="mt-4">
        <li>
          {products.map((product: any) => (
            <div
              key={product.id}
              className="flex items-center bg-white shadow-md rounded-md p-2 my-2"
            >
              <div className="ml-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-sm">{product.description}</p>
                <p className="text-sm">Price: {product.price}</p>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}
