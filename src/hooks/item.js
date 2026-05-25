import { getNewItemsApi, getItemDetailsApi } from "../api/item";
import { placeholderItems } from "../constants";
import { useQuery } from "./query";

function useNewItems() {
  const { isLoading, data } = useQuery(() => getNewItemsApi());
  return { newItems: data || placeholderItems, isLoading };
}

function useItemDetails(nftId) {
  const { isLoading, data } = useQuery(() => getItemDetailsApi(nftId));
  return { itemDetails: data || {}, isLoading };
}

export { useNewItems, useItemDetails };
