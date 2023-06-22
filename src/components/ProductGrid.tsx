import { useState } from "react";

import { FormControlLabel, FormGroup, Switch } from "@material-ui/core";
import { StoreProduct } from "../common.tsx/interfaces";
import { Product } from "./Product";

export interface ProductGridProps {
  productData: StoreProduct[];
  onDelete: (productId: string) => Promise<void>;
}

export interface ProductProps {
  productData: StoreProduct;
  defaultLayout: boolean;
  onDelete: (productId: string) => Promise<void>;
}

export const ProductGrid = ({ productData, onDelete }: ProductGridProps) => {
  const [switchLayout, setSwitchLayout] = useState(false);

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Switch color="primary" onChange={() => setSwitchLayout(!switchLayout)} defaultChecked />}
          label="Switch Layout"
        />
      </FormGroup>
      <div className="store-product" style={{ flexDirection: switchLayout ? "column" : "row" }}>
        {productData.map(product => (
          <div key={product.id} className="store-product-item">
            <Product defaultLayout={switchLayout} productData={product} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </>
  );
};
