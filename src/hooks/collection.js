import { useEffect, useState } from "react";
import { getHotCollectionsApi } from "../api/collection";

function useHotCollections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    async function getHotCollections() {
      const hotCollections = await getHotCollectionsApi();
      setCollections(hotCollections);
    }

    getHotCollections();
  }, []);

  return collections;
}

export { useHotCollections };
