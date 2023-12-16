// In Layout.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css'; 

const Layout = ({ children, openModal }) => {
    return (
        <>
         <Navbar openModal={openModal} />
            <div className="content">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;
