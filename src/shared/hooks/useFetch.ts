import { useState, useEffect } from "react";

const useFetch = (url: string, config: { method: string, bod?: any, filters?: any }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, config)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;
