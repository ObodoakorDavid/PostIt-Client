/** @format */

import React from "react";
import RootLayout from "../layouts/RootLayout";
import editIcon from "../assets/images/edit.png";

const CreateStory = () => {
  return (
    <RootLayout>
      <div className="px-4 text-sm-start">
        <h1 className="py-3 fw-bold">Create Story</h1>
        <form className="d-flex flex-column gap-4 pb-5">
          <div className=" position-relative">
            <img className=" position-absolute bg-white p-1" src={editIcon} alt="" />
            <input className="w-100 px-4 py-2 fw-semibold border rounded-1" type="text" placeholder="Title" />
          </div>
          <div className=" position-relative">
            <img className=" position-absolute bg-white p-1" src={editIcon} alt="" />
            <input className="w-100 px-4 py-2 fw-semibold border rounded-1" type="text" placeholder="Tags" />
          </div>
          <div className=" position-relative">
            <img className=" position-absolute bg-white p-1" src={editIcon} alt="" />
            <textarea
              className="w-100 px-4 py-2 fw-semibold border rounded-1"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your story......"
            ></textarea>
          </div>
          <button className="btn btn-bg-main w-50 mx-auto text-white">Publish Story</button>
        </form>
      </div>
    </RootLayout>
  );
};

export default CreateStory;
