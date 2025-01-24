import React from 'react';

const GroupsAside: React.FC = () => {
    return (
        <div className="p-4 bg-neutral-800 text-white">
            <h3 className="text-lg font-bold">Group Overview</h3>
            <ul>
                <li>Active Groups</li>
                <li>Group Notifications</li>
                <li>Pending Invites</li>
            </ul>
        </div>
    );
};

export default GroupsAside;
