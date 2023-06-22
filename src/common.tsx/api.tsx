import { StoreData, StoreProduct, StoreProductDetail } from "./interfaces";

const idStore = "ijpxNJLM732vm8AeajMR";
const baseApi = "https://us-central1-test-b7665.cloudfunctions.net/api";

export const getStoreData = async () => {
  const res = await fetch(`${baseApi}/stores/${idStore}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status !== 200) {
    throw new Error("Error retriving store data");
  }
  const data: StoreData = await res.json();
  return data;
};

export const getStoreProduct = async () => {
  const res = await fetch(`${baseApi}/stores/${idStore}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify({ idStore: idStore }),
    },
  });
  if (res.status !== 200) {
    throw new Error("Error retriving product data");
  }
  const data: StoreProduct[] = await res.json();
  return data;
};

export const createNewProduct = async (newProd: StoreProductDetail) => {
  console.log(newProd);

  const res = await fetch(`${baseApi}/stores/${idStore}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify({
        idStore: idStore,
        newProduct: {
          title: "abc",
          category: "def",
          price: 1,
          employee: "Aldo",
          description: "test",
          reviews: ["buoni"],
        },
      }),
    },
  });
  if (res.status !== 200) {
    throw new Error("Error creating new product");
  }
};

export const deleteStoreProduct = async (productId: string) => {
  const res = await fetch(`${baseApi}/stores/${idStore}/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify({ idStore: idStore, idProduct: productId }),
    },
  });
  if (res.status !== 200) {
    throw new Error("Error deleting product");
  }
};

export const getPromiseStoreData = () =>
  fetch(`${baseApi}/stores/${idStore}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getPromiseStoreProduct = () => fetch(`${baseApi}/stores/${idStore}/products`);
