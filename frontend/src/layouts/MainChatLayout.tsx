import React, { useState } from 'react';
import Sidebar from '../components/Chat/Sidebar';
import MessagesLayout from './MessagesLayout';
import GroupsLayout from './GroupsLayout';
import MessagesAside from '../components/Chat/MessagesAside';
import GroupsAside from '../components/Chat/GroupsAside';

const MainChatLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'messages' | 'groups' | null>('messages'); // Default to "messages"

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Main Section */}
            <div className="flex-1 bg-neutral-900 p-2">
                {activeTab === 'messages' && <MessagesLayout />}
                {activeTab === 'groups' && <GroupsLayout />}
            </div>

            {/* Right Aside */}
            <div className="w-80">
                {activeTab === 'messages' && <MessagesAside />}
                {activeTab === 'groups' && <GroupsAside />}
            </div>
        </div>
    );
};

export default MainChatLayout;
