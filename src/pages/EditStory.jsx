/** @format */

import React, { useEffect } from "react";
import RootLayout from "../layouts/RootLayout";
import { useParams } from "react-router-dom";

const EditStory = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  });

  return (
    <RootLayout>
      <div className="px-4 text-sm-start update-story">
        <form className="d-flex flex-column gap-4 pb-5">
          <div className="d-flex align-items-center border rounded-1 px-2 py-1 ">
            <label className="fw-bolder text-secondary" htmlFor="title">
              Title:
            </label>
            <input
              id="title"
              className="w-100 px-1 py-2 fw-semibold border-0"
              type="text"
            />
          </div>
          <div className="d-flex align-items-center border rounded-1 px-2 py-1">
            <label className="fw-bolder text-secondary" htmlFor="tags">
              Tags:
            </label>
            <input
              id="tags"
              className="w-100 px-1 py-2 fw-semibold border-0"
              type="text"
            />
          </div>
          <div>
            <textarea
              className="w-100 p-2 fw-semibold border rounded-1"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="btn btn-bg-main w-50 mx-auto text-white">
            Update Story
          </button>
        </form>
      </div>
    </RootLayout>
  );
};

export default EditStory;
