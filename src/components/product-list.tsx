import { ReactNode } from "react";

export default function ProductList({ children }: { children: ReactNode }) {
  return (
    <ul
      className="grid grid-cols-1 gap-4 mt-4 w-1/2 overflow-auto p-2"
    >
      {children}
    </ul>
  );
}
