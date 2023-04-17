/** @format */

import React from "react";
import Footer from "../components/Footer";
import Navbarr from "../components/Navbarr";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbarr />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
