import React, { useContext, useState } from 'react';
import { BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { USER_CONTEXT } from '../context/UserProvider';


const Navbar = () => {

    const { refetch, setRefetch, token } = useContext(USER_CONTEXT);
    const [navbar, setNavbar] = useState(false);

    const signOut = () => {
        localStorage.removeItem("accessToken");
        setRefetch(refetch + 1);
    }

    return (
        <div>
            <div className='bg-primary text-white text-[13px] text-center pt-4 pb-3.5 font-semibold'>
                We’ve extended our returns period to 60 days
            </div>
            <div className="customContainer">
                <nav className="flex items-center justify-between flex-wrap py-3">
                    <div className="flex items-center flex-shrink-0 text-white mr-16">
                        <Link to="/"><span className="text-primary text-4xl font-bold">LOGO.</span></Link>
                    </div>
                    <div className="block lg:hidden">
                        <button onClick={() => setNavbar(!navbar)} className="flex items-center px-3 py-2 border rounded text-primary border-teal-400  hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div className={`w-full ${navbar ? "block" : "hidden"} flex-grow lg:flex lg:items-center lg:w-auto`}>
                        <div className="text-base lg:flex-grow">
                            <Link to="/" className="text-primary font-semibold block mt-4 lg:inline-block lg:mt-0 mr-6 cursor-pointer">
                                Home
                            </Link>
                            <a href="#home" className="text-primary font-semibold block mt-4 lg:inline-block lg:mt-0 mr-6 cursor-pointer">
                                Shop
                            </a>
                            <a href="#home" className="text-primary font-semibold block mt-4 lg:inline-block lg:mt-0 mr-6 cursor-pointer">
                                About
                            </a>
                            <a href="#home" className="text-primary font-semibold block mt-4 lg:inline-block lg:mt-0 mr-6 cursor-pointer">
                                Blog
                            </a>
                            <a href="#home" className="text-primary font-semibold block mt-4 lg:inline-block lg:mt-0 mr-6 cursor-pointer">
                                Feature
                            </a>
                            <a href="#home" className="text-primary font-semibold block mt-4 lg:inline-block lg:mt-0">
                                Contacts
                            </a>
                        </div>
                        <div className='flex items-center gap-5 mt-4 sm:mt-0'>
                            <BiSearch className='cursor-pointer' />
                            <Link to="/userProfile"><FaRegUser className='cursor-pointer' /></Link>
                            <FiShoppingBag className='cursor-pointer' />
                            {!token ?
                                <Link to="/login"><button className='bg-secondary py-3 px-6 text-white rounded-sm'>Login</button></Link>
                                :
                                <button onClick={signOut} className='bg-secondary py-3 px-6 text-white rounded-sm'>Sign Out</button>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;