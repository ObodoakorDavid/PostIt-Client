/** @format */

import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "../utils/Loading";

const ViewStory = () => {
  const { token, baseURL } = useContext(AuthContext);

  const { id } = useParams();
  const { data, loading, error } = useFetch(`${baseURL}/stories/${id}/`, token);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>{data.tags}</p>
          <p>{data.author.username}</p>
        </div>
      )}

      {loading && <Loading />}
    </div>
  );
};

export default ViewStory;
