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
            <div className="w-1/2 bg-red flex items-center justify-center">
                <img
                    src="/src/assets/auth-bg.svg"
                    alt="Auth Background"
                    className="w-3/4 h-auto object-contain"
                    style={{ maxHeight: '100%' }}
                />
            </div>
        </div>
    );
};

export default AuthLayout;
