import React from 'react';
import OnlineUsers from './components/onlineUsers';
import PinnedChats from './components/PinnedChats';
import AllChats from './components/AllChats';
import { Icon } from '@iconify/react';

const RightAside: React.FC = () => {


    return (
        <div className="w-full h-screen bg-neutral-900 text-white flex flex-col overflow-hidden relative">
            {/* Online People Section */}
            <OnlineUsers />

            {/* Search Bar */}
            <div className="px-4 py-2 border-b border-neutral-700">
                <div className="relative">
                    <input
                        type="text"
                        className="w-full p-2 pr-10 h-10 text-sm border rounded-xl bg-gray-100 text-neutral-800 placeholder-gray-600 focus:outline-none"
                        placeholder="Search for friends..."
                    />
                    <span className="absolute inset-y-0 right-2 flex items-center text-gray-600">
                        <Icon icon="ph:magnifying-glass-duotone" width="28" height="28" />
                    </span>
                </div>
            </div>


            {/* Pinned Chats */}
            <PinnedChats />

            {/* All Chats */}
            <AllChats />
        </div>
    );
};

export default RightAside;
