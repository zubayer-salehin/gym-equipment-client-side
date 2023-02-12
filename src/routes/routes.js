import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "../utils/PrivateRoute";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/forgotPassword",
                element: <ForgotPassword />
            },
            {
                path: "/reset_password/:id",
                element: <ResetPassword />
            },
            {
                path: "/userProfile",
                element: (
                    <PrivateRoute>
                        <UserProfile />
                    </PrivateRoute>
                )
            }
        ]
    }
])

export default routes;
