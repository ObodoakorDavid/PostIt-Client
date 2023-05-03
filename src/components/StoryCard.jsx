/** @format */

import React from "react";
import lifestyle from "../assets/images/Lifestyle.png";
import profilePicture from "../assets/images/profile_picture.png";
import { Link } from "react-router-dom";

const StoryCard = ({ story }) => {
  return (
    <Link to={`/story/${story.id}`} className="text-start col-sm-6 col-md-4 ">
      <div className=" position-relative">
        <img className="w-100" src={lifestyle} alt="" />
        <button className="story-tags bg-primary btn text-white px-2 py-0">
          {story.tags}
        </button>
      </div>
      <h2>{story.title}</h2>
      <div className="d-flex gap-2 align-items-center py-2 ">
        <img src={profilePicture} alt="" />
        <p className="m-0">By {story.author.username} - May 21, 2022</p>
      </div>
      <p>{story.story}</p>
    </Link>
  );
};

export default StoryCard;
