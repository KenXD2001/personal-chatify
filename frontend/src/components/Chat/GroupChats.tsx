// src/components/Chat/GroupChats.tsx

import React from 'react';

interface GroupChatsProps {
    filter: string;
}

const GroupChats: React.FC<GroupChatsProps> = ({ filter }) => {
    const groups = [
        { id: 1, name: 'Work Group', unread: 2 },
        { id: 2, name: 'Family', unread: 0 },
        { id: 3, name: 'Friends', unread: 5 },
        { id: 4, name: 'Sports Club', unread: 1 },
        { id: 5, name: 'Book Club', unread: 3 },
        { id: 6, name: 'Gaming Squad', unread: 0 },
        { id: 7, name: 'Travel Buddies', unread: 4 },
        { id: 8, name: 'Music Lovers', unread: 2 },
        { id: 9, name: 'Coding Team', unread: 6 },
        { id: 10, name: 'College Alumni', unread: 1 },
    ];

    const filteredGroups = groups.filter((group) =>
        group.name.toLowerCase().includes(filter)
    );

    return (
        <div className="p-4">
            <ul>
                {filteredGroups.map((group) => (
                    <li
                        key={group.id}
                        className="flex justify-between items-center p-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                        <span>{group.name}</span>
                        {group.unread > 0 && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                {group.unread}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroupChats;
