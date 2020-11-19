import React from 'react';
import Header from './Header.jsx';
import './Home.css';
import Filter from './Filter.jsx';


const Home = () => {
    return(
        <div className='home'>
            <Header />
            <Filter />
        </div>
    )
}

export default Home;