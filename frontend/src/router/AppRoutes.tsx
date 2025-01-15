import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ChatPage from '../pages/ChatPage';
import AccountDetailsPage from '../pages/AccountDetailsPage';
import HelpAndSupportPage from '../pages/HelpAndSupportPage';
import PrivateRoute from './PrivateRoute';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/account-details" element={<AccountDetailsPage />} />
                <Route path="/help-and-support" element={<HelpAndSupportPage />} />
            </Route>

            {/* Fallback for 404 */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
    );
};

export default AppRoutes;
