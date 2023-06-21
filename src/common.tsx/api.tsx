import { StoreData, StoreProduct } from "./interfaces";

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
    throw new Error("Error retriving data");
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
    throw new Error("Error retriving data");
  }
  const data: StoreProduct[] = await res.json();
  return data;
};
