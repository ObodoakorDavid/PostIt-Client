/** @format */

import React, { useContext, useEffect, useState } from "react";
import RootLayout from "../layouts/RootLayout";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import StoryCard from "../components/StoryCard";

const Stories = () => {
  const { token, logOutUser, baseURL } = useContext(AuthContext);
  const [stories, setStories] = useState([]);
  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseURL}/stories/`);
      const data = await res.json();
      console.log(data);
      setStories(data);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <RootLayout>
      {!loading &&
        stories.map((eachStory) => {
          return <StoryCard key={eachStory.id} story={eachStory} />;
        })}
    </RootLayout>
  );
};

export default Stories;
