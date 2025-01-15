import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen w-full bg-neutral-900 p-5">
            {/* Left Section */}
            <div className="w-1/2 flex items-center justify-center bg-white rounded-3xl">
                <div className="max-w-md w-full">{children}</div>
            </div>

            {/* Right Section */}
            <div
                className="w-1/2 bg-cover bg-center bg-red"
                style={{ backgroundImage: `url('/src/assets/auth-bg.jpg')` }}
            ></div>
        </div>
    );
};

export default AuthLayout;
