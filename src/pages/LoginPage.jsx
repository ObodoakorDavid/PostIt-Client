/** @format */

import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h2 className=" fw-semibold">Welcome Back</h2>
      <form action="">
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button className="btn btn-bg-main text-white">Continue</button>
      </form>
      <p>
        No account
        <Link className=" text-decoration-none text-blue">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
