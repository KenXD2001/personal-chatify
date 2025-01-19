import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = (): boolean => {
    // Replace this with your actual authentication logic.
    const token = localStorage.getItem('authToken');
    return !!token;
};

const PrivateRoute: React.FC = () => {
    const token = localStorage.getItem('authToken');
    console.log(token);
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
