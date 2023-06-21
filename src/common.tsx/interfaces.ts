export interface StoreData {
  name: string;
  category: string;
  employees: string[];
}

export interface StoreProduct {
  id: string;
  data: {
    title: string;
    category: string;
    price: number;
    employee: string;
    description: string;
    reviews: string[];
  };
}
