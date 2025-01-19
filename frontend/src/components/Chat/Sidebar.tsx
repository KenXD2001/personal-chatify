import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';

const Sidebar: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'messages' | 'groups' | null>(null);

    const toggleTab = (tab: 'messages' | 'groups') => {
        setActiveTab((prev) => (prev === tab ? null : tab));
    };

    return (
        <div className="flex flex-col w-64 h-full bg-neutral-900 text-white">
            {/* Header */}
            <div className="p-4 border-b border-neutral-700">
                <h2 className="text-lg font-bold">Chatify</h2>
            </div>

            {/* Middle Section */}
            <div className="flex-1 p-4 space-y-4">
                {/* Add Buttons */}
                <div className="flex space-x-2">
                    <Button className="flex-1 bg-blue-500">Add Friend</Button>
                    <Button className="flex-1 bg-green-500">Create Group</Button>
                </div>

                {/* Messages Button */}
                <div
                    className={`p-2 cursor-pointer rounded-lg ${activeTab === 'messages' ? 'bg-blue-600' : 'bg-neutral-800'}`}
                    onClick={() => toggleTab('messages')}
                >
                    Messages
                </div>

                {/* Group Messages Button */}
                <div
                    className={`p-2 cursor-pointer rounded-lg ${activeTab === 'groups' ? 'bg-green-600' : 'bg-neutral-800'}`}
                    onClick={() => toggleTab('groups')}
                >
                    Group Messages
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-neutral-700 space-y-2">
                <Button className="w-full bg-gray-700">Account</Button>
                <Button className="w-full bg-gray-700">Help & Support</Button>
                <Button className="w-full bg-red-500">Logout</Button>
            </div>
        </div>
    );
};

export default Sidebar;
