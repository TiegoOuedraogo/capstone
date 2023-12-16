import React from 'react';
import './MainBanner.css'; 
import banner1 from '../../assets/banner1.png';


const MainBanner = () => {
    return (
        <div className="main-banner" style={{ backgroundImage: `url(${banner1})` }} >
            <h1 className="headline">Summer Sale: Up to 50% Off!</h1>
            <p className="subheadline">Explore the latest Saops.</p>
            <button className="cta-button">Shop Now</button>
            <h1 className="headline">Explore Our Latest Collections</h1>
                <p className="subheadline">Beauty for everyone</p>
                <div className="banner-links">
                <a href="/women" className="banner-link">Women</a>
                <a href="/men" className="banner-link">Men</a>
                <a href="/kids" className="banner-link">Kids</a>
                <a href="/gifts" className="banner-link">Gifts</a>
            </div>
            
        </div>

    );
}

export default MainBanner;
