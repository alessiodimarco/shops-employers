import { createNewProduct } from "@/src/common.tsx/api";
import { StoreProductDetail } from "@/src/common.tsx/interfaces";
import InputReview from "@/src/components/InputReview";
import { FormEvent, useRef, useState } from "react";

const AddStore = () => {
  const [reviews, setReviews] = useState<string[]>([]);

  const titleRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const employeeRef = useRef<HTMLSelectElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleReview = (inputs: string[]) => {
    setReviews(inputs);
  };

  const handleAddStoreProduct = async (newProd: StoreProductDetail) => {
    try {
      await createNewProduct(newProd);
      alert("Inserimento riuscito");
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleAddStoreProduct({
      title: titleRef.current!.value,
      category: categoryRef.current!.value,
      price: +priceRef.current!.value,
      employee: employeeRef.current!.value,
      description: descriptionRef.current!.value,
      reviews: reviews,
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Inserisci un nome" type="text" name="name" ref={titleRef} required />

      <input placeholder="Inserisci una categoria" type="text" name="category" ref={categoryRef} required />
      <input placeholder="Inserisci un prezzo" type="text" name="priceRef" ref={priceRef} required />

      <select name="employee" ref={employeeRef}>
        <option value="Dolci artigianali">Dolci artigianali</option>
        <option value="Dolci da banco">Dolci da banco</option>
      </select>
      <textarea placeholder="Inserisci una descrizione" name="description" ref={descriptionRef} />
      <InputReview onChange={handleReview} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddStore;
