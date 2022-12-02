import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../pages/shared/Admin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [admin , adminload] = useAdmin(user?.email)
    const location = useLocation();
    if(loading || adminload){
        return <progress className="progress w-56"></progress>
    }
    if(user && admin){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;