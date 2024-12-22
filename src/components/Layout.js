import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import backgroundImage from "../images/background-image.jpg";

const Layout = ({ children }) => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
