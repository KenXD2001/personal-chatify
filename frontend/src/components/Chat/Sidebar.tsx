import React from 'react';
import GroupChats from './GroupChats';

const Sidebar: React.FC = () => {
    const handleLogout = () => {
        console.log('Logout clicked');
    };

    return (
        <div className="w-64 h-full bg-gray-100 border-r flex flex-col">
            <div className="p-4 border-b">
                <h2 className="text-lg font-bold">Chatify</h2>
            </div>
            <div className="flex-1 overflow-y-auto">
                <GroupChats />
            </div>
            <div className="p-4 border-t">
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white p-2 rounded"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
