import React from 'react';
import Sidebar from '../components/Chat/Sidebar';

interface MainChatLayoutProps {
    children: React.ReactNode;
}

const MainChatLayout: React.FC<MainChatLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar Section */}
            <div className="w-64">
                <Sidebar />
            </div>

            {/* Main Chat Section */}
            <div className="flex-1 bg-gray-50 overflow-y-auto">{children}</div>
        </div>
    );
};

export default MainChatLayout;
