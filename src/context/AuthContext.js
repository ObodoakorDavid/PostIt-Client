/** @format */

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || null;
  });
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);
  const baseURL = "http://127.0.0.1:8000/api/v1";

  const navigate = useNavigate();
  // const notify = (message, type) =>
  //   toast.success(`Welcome ${user?.username}`, {
  //     position: "top-right",
  //   });

  let login = async (body) => {
    let response = await fetch(`${baseURL}/auth/token/login/`, {
      method: "POST",
      headers: {
        // "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let data = await response.json();
    if (data.auth_token) {
      setToken(data.auth_token);
      localStorage.setItem("token", JSON.stringify(data.auth_token));
      navigate("/dashboard");
    } else {
      toast.error(`invalid Credentials`, {
        position: "top-right",
      });
    }
  };

  let getUser = async () => {
    let response = await fetch(`${baseURL}/auth/users/me`, {
      method: "GET",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    if (data.username) {
      setUser(data);
      toast.success(`Welcome ${data.username}`, {
        position: "top-right",
      });
    } else {
      navigate("/login");
    }
  };

  const logOutUser = async () => {
    let response = await fetch(`${baseURL}/auth/token/logout`, {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
    });

    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/");
    toast.success("Log Out Successfull", {
      position: "top-right",
    });
  };

  useEffect(() => {
    console.log(token);
  }, [token]);

  const contextData = {
    user,
    login,
    token,
    getUser,
    logOutUser,
    baseURL,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
