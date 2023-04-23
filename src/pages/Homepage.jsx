/** @format */

import React from "react";
import RootLayout from "../layouts/RootLayout";
import "../styles/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <RootLayout>
      <div className="hero_section text-start">
        <div
          style={{
            maxWidth: "1000px",
          }}
          className="mx-auto px-4"
        >
          <h1 className="fw-bolder">Stay Curious.</h1>
          <p className="w-75 fw-semibold">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          <Link to='signup' className="btn btn-bg text-white btn-bg-main">Get Started</Link>
        </div>
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
