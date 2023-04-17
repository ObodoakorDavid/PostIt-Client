/** @format */

import React from "react";
import RootLayout from "../layouts/RootLayout";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <RootLayout>
      <div className="hero_section px-5 text-start">
        <h1 className="fw-bolder">Stay Curious.</h1>
        <p className=" w-50 fw-semibold">
          Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas massa
          velit aliquam. Molestim bibendum hnt ipsum orci, platea aliquam id ut.{" "}
        </p>
        <button className="btn btn-bg text-white">Get Started</button>
      </div>

      <div className="">
        <p>Second Section</p>
      </div>

      <div>
        <h2>
          Try Post<span>It</span>
        </h2>
        <p>Do you write or discover stories from writers on any topic?</p>
        <div>
          <input type="text" />
          <button className="btn btn-bg text-white">Get Started</button>
        </div>
      </div>
    </RootLayout>
  );
};

export default Homepage;
