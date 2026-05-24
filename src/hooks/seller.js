import { getTopSellersApi } from "../api/seller";
import { useQuery } from "./query";

const placeholderItems = Array.from({ length: 8 }).map((_, index) => ({
  id: `top-seller-placeholder-${index}`,
  authorName: "",
  authorImage: "",
  authorId: 0,
  price: 0,
}));

function useTopSellers() {
  const { isLoading, data } = useQuery(() => getTopSellersApi());
  return { topSellers: isLoading ? placeholderItems : data || [], isLoading };
}

export { useTopSellers };
