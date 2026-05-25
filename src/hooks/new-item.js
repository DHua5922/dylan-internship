import { getNewItemsApi } from "../api/new-item";
import { placeholderItems } from "../constants";
import { useQuery } from "./query";

function useNewItems() {
  const { isLoading, data } = useQuery(() => getNewItemsApi());
  return { newItems: data || placeholderItems, isLoading };
}

export { useNewItems };
