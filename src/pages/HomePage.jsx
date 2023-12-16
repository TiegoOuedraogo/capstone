import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar/Navbar';
import MainBanner from '../components/MainBanner/MainBanner';
import Promotions from '../components/Promotionns/Promotions';


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <MainBanner />
            <Promotions />
            {/* Other sections of the homepage */}
        </div>
    );
}

export default HomePage;
