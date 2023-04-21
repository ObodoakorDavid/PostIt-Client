/** @format */

import React from "react";
import RootLayout from "../layouts/RootLayout";
import { Link } from "react-router-dom";

const MyStories = () => {
  return (
    <RootLayout>
      <div className="py-4">
        <div className="d-flex align-items-center justify-content-between px-4">
          <h1 className=" fw-bold">My Stories</h1>
          <Link className=" btn text-white bg-dark px-4">Write Story</Link>
        </div>
        <div className="py-3 d-flex justify-content-start ps-4 gap-3">
          <p>All</p>
          <p>Drafts</p>
          <p>Published</p>
        </div>
      </div>
    </RootLayout>
  );
};

export default MyStories;
