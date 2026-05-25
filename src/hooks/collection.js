import { getHotCollectionsApi } from "../api/collection";
import { useQuery } from "./query";

const placeholderData = Array.from({ length: 6 }).map((_, index) => ({
  id: index,
  title: "",
  authorImage: "",
  nftImage: "",
  nftId: 0,
  authorId: 0,
  code: 0,
}));

function useHotCollections() {
  const { isLoading, data } = useQuery(() => getHotCollectionsApi());
  return { hotCollections: data || placeholderData, isLoading };
}

export { useHotCollections };
