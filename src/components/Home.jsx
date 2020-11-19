import React from "react";
import Header from "./Header.jsx";
import "./Home.css";
import Filter from "./Filter.jsx";
import Navbar from "./Navbar.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Filter />
    </div>
  );
};

export default Home;
