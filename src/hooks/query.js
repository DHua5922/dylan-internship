import { useEffect, useState } from "react";

function useQuery(queryFn, deps = []) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await queryFn();
      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, deps);

  return { isLoading, data };
}

export { useQuery };
