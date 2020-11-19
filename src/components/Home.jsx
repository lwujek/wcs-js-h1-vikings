import React from "react";
import Header from "./Header.jsx";
import "./Home.css";
import Filter from "./Filter.jsx";
import Navbar from "./Navbar.jsx";

const Home = () => {
    return(
        <div className='home'>
            <Navbar />
            <div className="column">
            <Header />
            <Filter />
            </div>
        </div>
    )
}


export default Home;
