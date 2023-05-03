/** @format */

import React, { useContext } from "react";
import RootLayout from "../layouts/RootLayout";
import "../styles/Homepage.css";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import AuthContext from "../context/AuthContext";
import Image from "../assets/images/Nature.png";

const Homepage = () => {
  const { baseURL } = useContext(AuthContext);
  const { data, loading, error } = useFetch(`${baseURL}/stories/`);

  return (
    <RootLayout>
      <div className="hero_section text-start">
        <div
          style={{
            maxWidth: "1000px",
          }}
          className="mx-auto px-4"
        >
          <h1 className="fw-bolder py-2">Stay Curious.</h1>
          <p className="fw-semibold">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          <Link to="signup" className="btn btn-bg text-white btn-bg-main px-4">
            Get Started
          </Link>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1000px",
        }}
        className=" d-flex flex-column flex-md-row gap-2 border border-2 mx-4 py-5 mt-5 border-light rounded-2 mx-auto"
      >
        {data &&
          data.slice(0, 3).map((datum) => {
            const { id, title, story, tags } = datum;
            return (
              <div
                key={id}
                className=" d-flex  align-items-sm-center px-4 gap-3"
              >
                <img src={Image} alt="" className="w-50 rounded-2" />
                <div
                  style={{
                    width: "100%",
                    maxWidth: "120px",
                  }}
                >
                  <p className="m-0 mb-2 bg-primary text-white rounded-3 py-1">
                    {tags}
                  </p>
                  <div className="">
                    <p className="m-0 text-start">{title}</p>
                    {/* <p className="m-0 text-start">{story}</p> */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div
        style={{
          maxWidth: "1000px",
          width: "90%",
        }}
        className="try-it mx-auto py-4 my-5"
      >
        <h2 className="fw-bold">
          Try Post<span className="text-blue">It</span>.
        </h2>
        <p className="fw-semibold">
          Do you write or discover stories from writers on any topic?
        </p>
        <div
          style={{
            maxWidth: "500px",
          }}
          className="w-75 mx-auto d-flex"
        >
          <input
            type="text"
            className="w-75 border-0 rounded-start px-3"
            placeholder="Enter Email Address"
          />
          <button className="btn btn-bg-main text-white w-25 rounded-0 rounded-end fs-4">
            Get Started
          </button>
        </div>
      </div>
    </RootLayout>
  );
};

export default Homepage;
