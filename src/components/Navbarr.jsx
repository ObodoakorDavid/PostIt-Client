/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <nav className="d-flex justify-content-between px-4 py-3">
      <h2 className="fs-2 fw-bold">
        Post<span className="text-blue">it</span>
      </h2>
      <div className="d-flex gap-3 align-items-center">
        <Link className=" text-decoration-none text-black fw-semibold" to="#">
          Stories
        </Link>
        <Link className=" text-decoration-none text-black fw-semibold" to="#">
          Contact
        </Link>
        <Link className=" text-decoration-none text-black fw-semibold" to="/login">
          Sign In
        </Link>
        <Link className="btn btn-bg-main text-white px-3 py-1 fw-semibold" to="#">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbarr;
