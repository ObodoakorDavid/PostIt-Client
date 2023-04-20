/** @format */

import React, { useContext, useEffect } from "react";
import RootLayout from "../layouts/RootLayout";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { getUser, user } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    getUser();
    if (!user){
      navigate('/login')
    }
  }, []);

  return (
    <RootLayout>
      <h1>Welcome {user && user.username}</h1>
    </RootLayout>
  );
};

export default Dashboard;
