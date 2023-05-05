/** @format */

import { useEffect, useState } from "react";

export const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        if (token) {
          let response = fetch(url, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error("Oooops! Something Went Wrong.");
          }
          let data = response.json();
          setData(data);
        } else {
          let response = fetch(url);
          if (!response.ok) {
            throw new Error("Oooops! Something Went Wrong.");
          }
          let data = response.json();
          setData(data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }, 3000);
  }, [url]);

  return { data, error, loading };
};
