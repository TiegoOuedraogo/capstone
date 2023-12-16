import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar/Navbar';
import MainBanner from '../components/MainBanner/MainBanner';
import Promotions from '../components/Promotionns/Promotions';


const HomePage = () => {
    return (
    <div className="content"> 
        <Navbar />
        <div>
            <MainBanner />
            <Promotions />
            {/* Other sections of the homepage */}
        </div>
    </div>
    );
}

export default HomePage;
