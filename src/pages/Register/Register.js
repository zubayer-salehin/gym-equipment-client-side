import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { USER_CONTEXT } from '../../context/UserProvider';

const Register = () => {

    const navigate = useNavigate();
    const { refetch, setRefetch } = useContext(USER_CONTEXT);

    const handleSubmit = (e) => {
        e.preventDefault();
        const registerInfo = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        fetch(`${process.env.REACT_APP_SERVER_SIDE_URL}/user/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
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
                        <h2 className='text-3xl sm:text-4xl font-bold mb-10 text-center'>Sign up</h2>
                        <div className='mb-7'>
                            <label className='authLabel' htmlFor="firstName">First name</label>
                            <input className='authInput' type="text" name='firstName' id='firstName' placeholder='Enter your first name' required />
                        </div>
                        <div className='mb-7'>
                            <label className='authLabel' htmlFor="lastName">Last name</label>
                            <input className='authInput' type="text" name='lastName' id='lastName' placeholder='Enter your last name' required />
                        </div>
                        <div className='mb-7'>
                            <label className='authLabel' htmlFor="email">Email</label>
                            <input className='authInput' type="email" id='email' placeholder='your@email.com' required />
                        </div>
                        <div className='mb-12'>
                            <label className='authLabel' htmlFor="password">Password</label>
                            <input className='authInput' type="password" id='password' placeholder='••••••••••••' required />
                        </div>
                        <input type="submit" className='px-8 py-4 bg-secondary text-white font-semibold cursor-pointer' value="Register" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;