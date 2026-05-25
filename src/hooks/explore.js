import { useState } from "react";
import { getExploreApi } from "../api/explore";
import { placeholderItems } from "../constants";
import { useQuery } from "./query";

function useExplore() {
  const [filter, setFilter] = useState("");
  const { isLoading, data } = useQuery(() => getExploreApi(filter), [filter]);

  return {
    exploreItems: data || placeholderItems,
    isLoading,
    filter,
    onChangeFilter: (evt) => setFilter(evt.target.value),
  };
}

export { useExplore };
