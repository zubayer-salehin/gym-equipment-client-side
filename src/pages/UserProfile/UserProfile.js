import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';

const UserProfile = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_SERVER_SIDE_URL}/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data?.data))
        setLoading(false);
    }, [])

    return (loading ? <Loading></Loading> :
        <div className='pt-10 pb-20'>
            <div className="flex justify-center">
                <div className='w-11/12 sm:w-7/12'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-10 text-center'>User Profile</h2>
                    <div className="p-3 border shadow-lg">
                        <div className="overflow-x-auto">
                            <table className="overflow-scroll table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">#</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">First Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Last Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Email</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Password</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">

                                    {users?.map((user, index) => <tr key={user._id}>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="font-semibold text-gray-800">{++index}</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="font-semibold text-gray-800">{user.firstName}</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">{user.lastName}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">{user.email}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">{user.password}</div>
                                        </td>
                                    </tr>)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserProfile;