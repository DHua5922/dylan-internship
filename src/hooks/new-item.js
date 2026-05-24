import { useEffect, useState } from "react";
import { getNewItemsApi } from "../api/new-item";

function useNewItems() {
  const [newItems, setNewItems] = useState(
    Array.from({ length: 6 }).map((item, index) => ({
      id: 0,
      authorId: 0,
      authorImage: "",
      nftImage: "",
      nftId: 0,
      title: "",
      price: 0,
      likes: 0,
      expiryDate: 0,
    })),
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getNewItems() {
      setIsLoading(true);
      const newItems = await getNewItemsApi();
      setNewItems(newItems);
      setIsLoading(false);
    }

    getNewItems();
  }, []);

  return { newItems, isLoading };
}

export { useNewItems };
