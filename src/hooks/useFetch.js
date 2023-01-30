import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, [url]);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      await makeRequest.get(url).then((_res) => {
        if (_res.status === 200) {
          setLoading(false);
          setData(_res.data.data);
        }
      })
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };
  return { data, loading, error };
};

export default useFetch;
