import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { USER_CONTEXT } from '../../context/UserProvider';

const Login = () => {

    const navigate = useNavigate();
    const { refetch, setRefetch } = useContext(USER_CONTEXT);

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginInfo = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        fetch("https://gym-equipment-server-side.vercel.app/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    localStorage.setItem("accessToken", data?.data?.token)
                    toast.success(data?.message, "user");
                    e.target.reset();
                    setRefetch(refetch + 1);
                    navigate("/");
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
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-3xl sm:text-4xl font-bold mb-10 text-center'>Log in</h2>
                        <div className='mb-8'>
                            <label className='authLabel' htmlFor="email">Email</label>
                            <input className='authInput' type="email" name='email' id='email' placeholder='your@email.com' required />
                        </div>
                        <div className='mb-14'>
                            <label className='authLabel' htmlFor="password">Password</label>
                            <input className='authInput' type="password" name='password' id='password' placeholder='••••••••••••' required />
                        </div>
                        <div className='mb-10'>
                            <input type="submit" className='px-8 py-4 bg-secondary text-white mr-6 font-semibold cursor-pointer' value="LOGIN" />
                            <Link to="/forgotPassword"><span className='text-sm text-secondary cursor-pointer'>Forgot your password?</span></Link>
                        </div>
                        <h4 className='text-xl font-bold'>New Customer?</h4>
                        <p className='mt-6 text-gray-500'>Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.</p>
                        <Link to="/register"><button className='px-8 py-4 bg-accent text-white mt-6 font-semibold'>Register</button></Link>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;