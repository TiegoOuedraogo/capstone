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
                <a href="/">Product</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
                <a href="/">Signup/Login</a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </nav>
    );
}

export default Navbar;
