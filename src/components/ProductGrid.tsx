import { useState } from "react";

import { StoreProduct } from "../common.tsx/interfaces";
import { Product } from "./Product";

export interface ProductGridProps {
  productData: StoreProduct[];
  onDelete: (productId: string) => Promise<void>;
}

export interface ProductProps {
  productData: StoreProduct;
  layout: "panel" | "grid";
  onDelete: (productId: string) => Promise<void>;
}

export const ProductGrid = ({ productData, onDelete }: ProductGridProps) => {
  const [panelLayout, setPanel] = useState("panel");

  return (
    <div className="store-product">
      {productData.map(product => (
        <div key={product.id} className="store-product-item">
          <Product layout="panel" productData={product} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};
