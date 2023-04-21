/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbarr = () => {
  const { token, logOutUser } = useContext(AuthContext);
  console.log(token);

  return (
    <nav
      style={{
        maxWidth: "1000px",
      }}
      className="d-flex justify-content-between px-4 py-3 mx-auto"
    >
      <Link to="/" className="fs-2 fw-bold text-decoration-none text-dark">
        Post<span className="text-blue">it</span>
      </Link>
      <div className="d-flex gap-3 align-items-center">
        <Link
          to="/dashboard"
          className=" text-decoration-none text-black fw-semibold"
        >
          Stories
        </Link>
        <Link className=" text-decoration-none text-black fw-semibold" to="#">
          Contact
        </Link>
        {token ? (
          <Link
            onClick={() => {
              logOutUser();
            }}
            className=" text-decoration-none text-black fw-semibold"
            to="/"
          >
            Log Out
          </Link>
        ) : (
          <Link
            className=" text-decoration-none text-black fw-semibold"
            to="/login"
          >
            Sign In
          </Link>
        )}
        <Link
          className="btn btn-bg-main text-white px-3 py-1 fw-semibold"
          to="#"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbarr;
