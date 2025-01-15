import React from 'react';

const GroupChats: React.FC = () => {
    const groups = [
        { id: 1, name: 'Work Group', unread: 2 },
        { id: 2, name: 'Family', unread: 0 },
        { id: 3, name: 'Friends', unread: 5 },
    ];

    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Group Chats</h3>
            <ul>
                {groups.map((group) => (
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
