import { useEffect, useState } from "react";
import { getHotCollectionsApi } from "../api/collection";

function useHotCollections() {
  const [collections, setCollections] = useState(
    Array.from({ length: 6 }).map((item, index) => ({
      id: 0,
      title: "",
      authorImage: "",
      nftImage: "",
      nftId: 0,
      authorId: 0,
      code: 0,
    })),
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getHotCollections() {
      setIsLoading(true);
      const hotCollections = await getHotCollectionsApi();
      setCollections(hotCollections);
      setIsLoading(false);
    }

    getHotCollections();
  }, []);

  return { hotCollections: collections, isLoading };
}

export { useHotCollections };
