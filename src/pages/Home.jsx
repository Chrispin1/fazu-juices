import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="min-h-screen relative bg-neutral-100">
        <div
          className="absolute inset-0 opacity-40 "
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(0,0,0,0.05)1px, transparent 1px),linear-gradient(to bottom, rgba(0,0,0,0.05)1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <Navbar />
        <Sidebar />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default Home;
