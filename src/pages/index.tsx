//import Rating from "@mui/material/Rating";
import { Snackbar } from "@material-ui/core";
import { useEffect, useState } from "react";
import { deleteStoreProduct, getPromiseStoreData, getPromiseStoreProduct, getStoreProduct } from "../common.tsx/api";
import { StoreData, StoreProduct } from "../common.tsx/interfaces";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Menu } from "../components/Menu";
import { ProductGrid } from "../components/ProductGrid";
import { StoreInfo } from "../components/StoreInfo";

function App() {
  const [storeData, setStoreData] = useState<StoreData>({ category: "", employees: [], name: "" });
  const [storeDataProduct, setStoreDataProduct] = useState<StoreProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    handleInitialData();
  }, []);

  const handleInitialData = async () => {
    setIsLoading(true);
    //get store data
    const pStoreData = getPromiseStoreData();
    //get products data
    const pProductsData = getPromiseStoreProduct();

    const responses = await Promise.all([pStoreData, pProductsData]);
    const [resStoreData, resStoreDataProduct] = (await Promise.all(responses.map(r => r.json()))) as [
      StoreData,
      StoreProduct[]
    ];
    setStoreData(resStoreData);
    setStoreDataProduct(resStoreDataProduct);
    setIsLoading(false);
  };

  const handleFetchStoreProduct = async () => {
    setIsLoading(true);
    try {
      let newData: StoreProduct[] = await getStoreProduct();
      setStoreDataProduct(newData);
      setIsLoading(false);
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  const handleDeleteStoreProduct = async (productId: string) => {
    try {
      await deleteStoreProduct(productId);
      setShowMessage(true);
      handleFetchStoreProduct();
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  return (
    <div className="App">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Menu />
          <StoreInfo data={storeData} />
          <h2 className="product-list">Product List</h2>
          <ProductGrid productData={storeDataProduct} onDelete={handleDeleteStoreProduct} />
          {showMessage && (
            <Snackbar
              open={showMessage}
              onClose={() => setShowMessage(false)}
              autoHideDuration={3000}
              message="Product Deleted"
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
