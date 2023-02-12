import React from 'react';
import { Outlet } from 'react-router-dom';
import UserProvider from '../context/UserProvider';
import ScrollToTop from '../ScrollToTop';
import Footer from './Footer';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div>
            <ScrollToTop />
            <UserProvider>
                <Navbar />
                <Outlet />
                <Footer />
            </UserProvider>
        </div>
    );
};

export default Main;