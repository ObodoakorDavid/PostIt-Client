/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const AllUserStories = () => {
  const { token, baseURL } = useContext(AuthContext);
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
    <div className="py-4 d-flex flex-column gap-4">
      {!loading &&
        stories.map((eachStory) => {
          return (
            <div key={eachStory.id} className="d-flex text-start justify-content-between align-items-start px-4">
              <div>
                <h1>{eachStory.title}</h1>
                <p>{eachStory.story}</p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <Link
                  to="/edit"
                  className="btn btn-bg-main text-white px-4 fw-semibold"
                >
                  Edit Post
                </Link>
                <button className="btn border-main text-blue fw-semibold px-4">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllUserStories;
