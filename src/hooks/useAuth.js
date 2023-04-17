/** @format */

import { useState, useEffect } from "react";

export const useAuth = (endPoint, method, body) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseURL = "http://127.0.0.1:8000/api/v1/";

  useEffect(() => {
    // console.log();
  }, [endPoint]);

  return { user, token, error, loading };
};
