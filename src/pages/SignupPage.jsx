/** @format */

import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div>
      <h2 className=" fw-semibold">
        Join Post<span className="text-blue">it</span>
      </h2>
      <p>
        Enter your email address to create an account on Post
        <span className="text-blue">it</span>
      </p>
      <form action="">
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button className="btn btn-bg-main text-white">Continue</button>
      </form>
      <p>
        Already have an account?
        <Link className=" text-decoration-none text-blue">Sign In</Link>
      </p>
    </div>
  );
};

export default SignupPage;
