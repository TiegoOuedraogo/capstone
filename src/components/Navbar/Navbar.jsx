import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/images/logo1.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="BfBeauty Logo" className="navbar-logo" />
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <div className="dropdown">
                    <button className="dropbtn">Product</button>
                    <div className="dropdown-content">
                        <a href="/products/women">Women</a>
                        <a href="/products/men">Men</a>
                        <a href="/products/kids">Kids</a>
                    </div>
                </div>
                <a href="/">Services</a>
                <a href="/">Contact</a>
                <div className="dropdown">
                    <button className="dropbtn">Account</button>
                    <div className="dropdown-content">
                        <a href="/Account/login">Login</a>
                        <a href="/Account/signup">Sign up</a>
                    </div>
                </div>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </nav>
    );
}

export default Navbar;
