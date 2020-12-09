import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  return (
    <div className="container w-full h-screen max-w-none">
      <Navbar />
      <main className="max-w-screen-xl m-auto ">{children}</main>
      <Footer />
    </div>
  );
}
