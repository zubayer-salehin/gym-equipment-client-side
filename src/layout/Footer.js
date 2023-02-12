import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=" bg-primary">
            <div className="customContainer pt-12 pb-20 footerTopBorder">
                <div className='grid lg:grid-cols-12 gap-10'>
                    <div className='lg:col-span-3'>
                        <h3 className='text-4xl font-bold text-white'>LOGO.</h3>
                        <p className='mt-4 footerLinkColor'>Be the first who learns about our
                            great promotions!</p>
                        <p className='mt-5 lg:mt-14 mb-4 text-white text-xl'>FOLLOW US</p>
                        <div className='flex gap-4'>
                            <div className='p-2.5 bg-secondary'>
                                <FaTwitter className='text-white ' />
                            </div>
                            <div className="p-2.5 socialLinkBorder">
                                <FaFacebookF className='text-white' />
                            </div>
                            <div className="p-2.5 socialLinkBorder">
                                <FaInstagram className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-2'>
                        <h2 className='text-white text-xl mb-4 font-semibold'>Products</h2>
                        <ul className='footerMenu'>
                            <li>New Arrival</li>
                            <li>Best Seller</li>
                            <li>On Sale</li>
                            <li>All Collection</li>
                        </ul>
                    </div>
                    <div className='lg:col-span-2'>
                        <h2 className='text-white text-xl mb-4 font-semibold'>CATEGORY</h2>
                        <ul className='footerMenu'>
                            <li>Barbells</li>
                            <li>Plates</li>
                            <li>Benches</li>
                            <li>Appareal</li>
                            <li>Straps & Supports</li>
                        </ul>
                    </div>
                    <div className='lg:col-span-2'>
                        <h2 className='text-white text-xl mb-4 font-semibold'>Info</h2>
                        <ul className='footerMenu'>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Feature</li>
                            <li>Store Location</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='lg:col-span-3'>
                        <h2 className='text-white text-xl mb-4 font-semibold'>SUBSCRIBE</h2>
                        <p className='mt-3 footerLinkColor'>Be the first who learns about our
                            great promotions!</p>
                        <div className='w-full xs:w-4/5 sm:w-3/4 md:w-2/5 lg:w-full grid grid-cols-6 mt-10 border'>
                            <input className='footerInput col-span-4' type="text" placeholder='Enter your email...' />
                            <button className='col-span-2 bg-secondary text-white text-sm font-semibold px-6'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;