/** @format */

import { useEffect, useState } from "react";

export const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something Went Wrong");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        console.log(json);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError("Oooops! Something Went Wrong.");
        console.log(err);
      });
  }, [url]);

  return { data, error, loading };
};
