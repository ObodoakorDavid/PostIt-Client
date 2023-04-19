/** @format */

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseURL = "http://127.0.0.1:8000/api/v1";

  const navigate = useNavigate()

  let login = async (body) => {
    let response = await fetch(`${baseURL}/auth/token/login/`, {
      method: "POST",
      headers: {
        // Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let data = await response.json();
    console.log(data);
    setToken(data.auth_token);
    localStorage.setItem("token", JSON.stringify(data.auth_token));
  };

  let getUser = async () => {
    let response = await fetch(`${baseURL}/auth/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    setUser(data);
  };



  useEffect(() => {
    console.log(token);
  }, [token]);

  const contextData = {
    user,
    login,
    token,
    getUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
