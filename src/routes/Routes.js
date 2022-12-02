import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllBuyers from "../pages/admin/AllBuyers";
import AllSellers from "../pages/admin/AllSellers";
import Home from "../pages/home/Home"
import Category from "../pages/home/items/Category";
import Date from "../pages/home/items/Date";
import AdProduct from "../pages/home/seller/AdProduct";
import SignUp from "../pages/home/signup/SignUp";
import Login from "../pages/login/Login";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import MyOrders from '../../src/pages/home/buyer/MyOrders'
import MyBuyers from '../../src/pages/home/seller/MyBuyers'
import MyProducts from '../../src/pages/home/seller/MyProducts'
import Blogs from "../pages/Blogs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<SignUp />
            },
            {
                path:'/category/:id',
                element:<Category />
            },
            {
                path:'/additems',
                element: <Date />
            },
            {
                path:'/blogs',
                element: <Blogs />
            }
        ]
    },
    {
        path: '/myorders',
        element: <PrivateRoute><MyOrders /></PrivateRoute>
    },
    {
        path: '/addItem',
        element: <PrivateRoute><AdProduct /></PrivateRoute>
    },
    {
        path: '/mybuyers',
        element:<PrivateRoute><MyBuyers /></PrivateRoute>
    },
    {
        path: '/myproducts',
        element: <PrivateRoute><MyProducts /></PrivateRoute>
    },
    {
        path: '/allbyers',
        element:<AdminRoute><AllBuyers /></AdminRoute>
    },
    {
        path: '/allsellers',
        element:<AdminRoute><AllSellers /></AdminRoute>
    }
])
export default router;