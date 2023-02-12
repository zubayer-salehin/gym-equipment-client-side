import React from 'react';
import logo from "../../asset/logo/Logo.png"

const Banner = () => {
    return (
        <div className='relative'>
            <img className='w-screen h-screen object-cover' src={logo} alt="" />
            <div className="absolute w-full h-full top-0 left-0 banngerBg"></div>
            <div className="absolute w-4/5 md:w-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold'>Sports Clothing & Fitness Equipment Shopify Theme</h1>
                <button className='bannerBtn bg-secondary'>veiw shop</button>
            </div>
        </div>
    );
};



export default Banner;