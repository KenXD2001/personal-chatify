import React from 'react';
import Sidebar from '../components/Chat/Sidebar';
import ChatWindow from '../components/Chat/ChatWindow';
import RightAside from '../components/Chat/RightAside';

const MainChatLayout: React.FC = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64">
                <Sidebar />
            </div>

            {/* Chat Window */}
            <div className="flex-1 bg-neutral-900 p-2">
                <ChatWindow />
            </div>

            {/* Right Aside */}
            <div className="w-80">
                <RightAside />
            </div>
        </div>
    );
};

export default MainChatLayout;
