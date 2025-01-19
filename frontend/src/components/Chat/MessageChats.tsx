// src/components/Chat/MessageChats.tsx

import React from 'react';

interface MessageChatsProps {
    filter: string;
}

const MessageChats: React.FC<MessageChatsProps> = ({ filter }) => {
    const messages = [
        { id: 1, sender: 'Alice', lastMessage: 'Hi!', unread: 2 },
        { id: 2, sender: 'Bob', lastMessage: 'Let’s catch up.', unread: 0 },
        { id: 3, sender: 'Charlie', lastMessage: 'See you soon.', unread: 1 },
    ];

    const filteredMessages = messages.filter((chat) =>
        chat.sender.toLowerCase().includes(filter)
    );

    return (
        <div className="p-4">
            <ul>
                {filteredMessages.map((chat) => (
                    <li
                        key={chat.id}
                        className="flex justify-between items-center p-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                        <span>{chat.sender}</span>
                        {chat.unread > 0 && (
                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                {chat.unread}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageChats;
