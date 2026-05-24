import { useEffect, useState } from "react";

function useQuery(queryFn) {
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
  }, []);

  return { isLoading, data };
}

export { useQuery };
