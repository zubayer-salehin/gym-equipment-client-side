import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';


const ResetPassword = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const password = e.target.password.value;

        fetch(`https://gym-equipment-server-side-production.up.railway.app/user/resetPassword/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    toast.success(data?.message, "user");
                    e.target.reset();
                    navigate("/login");
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
                    <h2 className='text-2xl sm:text-3xl font-bold mb-8 text-center'>New Password Set</h2>
                    <p className='mb-6 text-gray-600'>Enter the password, which you will remember.</p>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-10'>
                            <label className='authLabel' htmlFor="password">Password</label>
                            <input className='authInput' type="text" name='password' id='password' placeholder='Enter Your New Password' />
                        </div>
                        <div className='mb-12'>
                            <input type="submit" className='px-8 py-4 bg-secondary text-white mr-6 font-semibold cursor-pointer' value="NEW PASSWORD" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;