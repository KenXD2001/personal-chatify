import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import LoginForm from '../components/Auth/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
};

export default LoginPage;
