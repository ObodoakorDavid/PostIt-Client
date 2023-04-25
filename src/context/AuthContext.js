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
  const [authenticating, setaAuthenticating] = useState(false);
  const baseURL = "http://127.0.0.1:8000/api/v1";

  const navigate = useNavigate();

  let login = (body) => {
    setaAuthenticating(true);
    setTimeout(async () => {
      let response = await fetch(`${baseURL}/auth/token/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let data = await response.json();
      if (data.auth_token) {
        setToken(data.auth_token);
        localStorage.setItem("token", JSON.stringify(data.auth_token));
        navigate("/dashboard");
        setaAuthenticating(false);
      } else {
        toast.error(`invalid Credentials`, {
          position: "top-right",
        });
        setaAuthenticating(false);
      }
    }, 3000);
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
    if (data.username) {
      setUser(data);
      toast.success(`Welcome ${data.username}`, {
        position: "top-right",
        id: "welcome",
      });
    } else {
      navigate("/login");
    }
  };

  const logOutUser = async () => {
    let response = await fetch(`${baseURL}/auth/token/logout`, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
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

  const signUp = async (body) => {
    setaAuthenticating(true);
    const newBody = { ...body, re_password: body.password };
    let response = await fetch(`${baseURL}/auth/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBody),
    });

    let data = await response.json();

    if (response.status === 400) {
      if (data.password) {
        data.password.forEach((d) => {
          toast.error(d, {
            position: "top-right",
          });
        });
        setaAuthenticating(false);
      }
      if (data.email) {
        data.email.forEach((d) => {
          toast.error(d, {
            position: "top-right",
          });
        });
        setaAuthenticating(false);
      }
      // toast.error(`Username or email already taken`, {
      //   position: "top-right",
      // });
      // setaAuthenticating(false);
      console.log(data);
      return;
    }

    toast.success(`Registration Successful`, {
      position: "top-right",
    });
    const formData = {
      email: body.email,
      password: body.password,
    };
    login(formData);
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
    authenticating,
    signUp,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
