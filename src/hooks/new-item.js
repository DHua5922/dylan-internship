import { getNewItemsApi } from "../api/new-item";
import { useQuery } from "./query";

const placeholderItems = Array.from({ length: 6 }).map((item, index) => ({
  id: 0,
  authorId: 0,
  authorImage: "",
  nftImage: "",
  nftId: 0,
  title: "",
  price: 0,
  likes: 0,
  expiryDate: 0,
}));

function useNewItems() {
  const { isLoading, data } = useQuery(() => getNewItemsApi());
  return { newItems: data || placeholderItems, isLoading };
}

export { useNewItems };
