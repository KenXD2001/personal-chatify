import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import ResetPasswordForm from '../components/Auth/ResetPasswordForm';

const ResetPasswordPage: React.FC = () => {
    return (
        <AuthLayout>
            <ResetPasswordForm />
        </AuthLayout>
    );
};

export default ResetPasswordPage;
