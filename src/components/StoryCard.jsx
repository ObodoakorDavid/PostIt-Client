/** @format */

import React from "react";
import lifestyle from "../assets/images/Lifestyle.png";
import profilePicture from '../assets/images/profile_picture.png'

const StoryCard = ({ story }) => {
  return (
    <div key={story.id} className="text-start px-4">
      <div className=" position-relative">
        <img src={lifestyle} alt="" />
        <button className="story-tags bg-primary btn text-white px-2 py-0">{story.tags}</button>
      </div>
        <h2>{story.title}</h2>
      <div className="d-flex gap-2 align-items-center py-2 ">
        <img src={profilePicture} alt="" />
        <p className="m-0">By {story.author.username} - May 21, 2022</p>
      </div>
      <p>{story.story}</p>
    </div>
  );
};

export default StoryCard;
