import { getHotCollectionsApi } from "../api/collection";
import { useQuery } from "./query";

const placeholderItems = Array.from({ length: 6 }).map((item) => ({
  id: 0,
  title: "",
  authorImage: "",
  nftImage: "",
  nftId: 0,
  authorId: 0,
  code: 0,
}));

function useHotCollections() {
  const { isLoading, data } = useQuery(() => getHotCollectionsApi());
  return { hotCollections: data || placeholderItems, isLoading };
}

export { useHotCollections };
