import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";


const PrivateRoute = ({ children }) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_SERVER_SIDE_URL}/user/userVerify`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "fail") {
                    navigate("/login");
                }
                setLoading(false);
            })
    }, [navigate])

    if (loading) {
        return <Loading></Loading>
    }

    return children;
};

export default PrivateRoute;
