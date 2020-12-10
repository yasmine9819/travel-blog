import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout({ children }: any) {
  return (
    <div className="container w-full h-screen max-w-none">
      <Navbar />
      <main className="m-auto overflow-hidden max-w-7xl">{children}</main>
      <Footer />
    </div>
  );
}
