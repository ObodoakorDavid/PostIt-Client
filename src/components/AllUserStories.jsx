/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useFetch } from "../hooks/useFetch";

const AllUserStories = () => {
  const { token, baseURL } = useContext(AuthContext);

  const { data, error, loading } = useFetch(`${baseURL}/stories/user/`, token);

  return (
    <div className="py-4 d-flex flex-column gap-4">
      {loading && <p>Loading</p>}
      {!loading && data &&
        data.map((eachStory) => {
          const { id, title, story } = eachStory;
          return (
            <div
              key={id}
              className="d-flex text-start justify-content-between align-items-start px-4"
            >
              <div>
                <h1>{title}</h1>
                <p>{story}</p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <Link
                  to={`/edit/${id}`}
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default AllUserStories;
