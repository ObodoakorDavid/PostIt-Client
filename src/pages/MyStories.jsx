/** @format */

import React, { useContext, useEffect, useState } from "react";
import RootLayout from "../layouts/RootLayout";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const MyStories = () => {
  const { token, logOutUser, baseURL } = useContext(AuthContext);
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseURL}/stories/user/`, {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setStories(data);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <RootLayout>
      <div className="py-4">
        <div className="d-flex align-items-center justify-content-between px-4">
          <h1 className=" fw-bold">My Stories</h1>
          <Link to="/create" className=" btn text-white bg-dark px-4">
            Write Story
          </Link>
        </div>
        <div className="pt-4 d-flex justify-content-start ps-4 gap-3">
          <Link to='all' className="m-0">All</Link>
          <Link to='drafts' className="m-0">Drafts</Link>
          <Link to='published' className="m-0">Published</Link>
        </div>
        <hr className="mx-4" />
        <Outlet />
      </div>
    </RootLayout>
  );
};

export default MyStories;
