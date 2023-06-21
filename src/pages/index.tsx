import { useEffect, useState } from "react";
import { getStoreData, getStoreProduct } from "../common.tsx/api";
import { StoreData, StoreProduct } from "../common.tsx/interfaces";

function App() {
  const [storeData, setStoreData] = useState<StoreData>({ category: "", employees: [], name: "" });
  const [storeDataProduct, setStoreDataProduct] = useState<StoreProduct[]>([]);

  useEffect(() => {
    const _handleFetchStore = async () => {
      try {
        let newData: StoreData = await getStoreData();
        setStoreData(newData);
      } catch (e) {
        console.log((e as Error).message);
      }
    };

    const _handleFetchStoreProduct = async () => {
      try {
        let newData: StoreProduct[] = await getStoreProduct();
        setStoreDataProduct(newData);
      } catch (e) {
        console.log((e as Error).message);
      }
    };

    _handleFetchStore();
    _handleFetchStoreProduct();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="store-info">
        <h1>{storeData.name}</h1>
        <h2>{storeData.category}</h2>
        <ul>
          {storeData.employees.map((empl, i) => (
            <li key={i}>{empl}</li>
          ))}
        </ul>
      </div>
      <div className="store-product">
        {storeDataProduct.map(product => (
          <div key={product.id} className="store-product-item">
            <p>{product.data.title}</p>
            <p>{product.data.description}</p>
            <p>{product.data.price}</p>
            <p>{product.data.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
