/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          maxWidth: "1000px",
        }}
        className="main-footer d-md-flex mx-auto"
      >
        <div>
          <h2 className=" fs-5 fw-semibold text-md-start">
            About Post<span className="text-blue">it.</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
            rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
            que maeae tortoere necsem commodo ac.
          </p>
        </div>
        <div>
          <h2>Quick Menu</h2>
          <div>
            <p>Home</p>
            <p>Stories</p>
            <p>Trending Stories</p>
            <p>Popular Stories</p>
          </div>
        </div>
        <div>
          <p>Sign up</p>
          <p>Login</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h2>Subscribe to our newsletter</h2>
          <div className="d-flex mx-auto bg-white p-1 ps-3 rounded-2">
            <input
              className="input-group border-0"
              type="text"
              placeholder="Email Address"
            />
            <button className="btn text-white btn-bg-main rounded-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>Terms and Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
