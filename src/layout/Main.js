import React from 'react';
import { Outlet } from 'react-router-dom';
import UserProvider from '../context/UserProvider';
import Footer from './Footer';
import Navbar from './Navbar';

const Main = () => {
    return (
        <UserProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </UserProvider>
    );
};

export default Main;