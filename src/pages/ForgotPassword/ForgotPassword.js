import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        fetch(`https://gym-equipment-server-side.vercel.app/user/forgetPasswordEmail/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    toast.success(data?.message, "user");
                    e.target.reset();
                } else if (data.status === "fail") {
                    if (data.code === 400) {
                        return toast.error(data?.error, "user");
                    }
                    toast.error(data?.message, "user");
                }
            })
    }

    return (
        <div className='pt-10 pb-20'>
            <div className="flex justify-center">
                <div className='w-5/6 xs:w-4/6 sm:w-3/6 lg:w-2/6 xl:w-1/4'>
                    <h2 className='text-2xl sm:text-3xl font-bold mb-8 text-center'>Reset your password</h2>
                    <p className='mb-6 text-gray-600'>We'll send you an email to reset your password.</p>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-10'>
                            <label className='authLabel' htmlFor="email">Email</label>
                            <input className='authInput' type="email" name='email' id='email' placeholder='your@email.com' />
                        </div>
                        <div className='mb-12'>
                            <button className='px-8 py-4 bg-secondary text-white mr-6 font-semibold'>RESET</button>
                            <Link to="/login"><span className='text-sm text-secondary cursor-pointer'>Cancel</span></Link>
                        </div>
                    </form>
                    <h4 className='text-xl font-bold'>New Customer?</h4>
                    <p className='mt-6 text-gray-500'>Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.</p>
                    <Link to="/register"><button className='px-8 py-4 bg-accent text-white mt-6 font-semibold'>Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;