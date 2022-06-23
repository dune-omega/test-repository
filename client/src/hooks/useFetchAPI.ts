import { useEffect, useState } from "react";
import axios from "axios";
import { TUserContext } from "../context/userContext";

export default function useFetchAPI(url: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err as any);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading } as TUserContext;
}
