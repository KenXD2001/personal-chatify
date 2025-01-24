import React from 'react';
import { Icon } from '@iconify/react'; // React-Iconify import for icons
import { ScrollArea } from "@/components/ui/scroll-area"

// Define message status types
type MessageStatus = 'sent' | 'received' | 'viewed';

// Sample data for pinned chats
const pinnedChats: { username: string; message: string; profileImage: string; messageStatus: MessageStatus; time: string }[] = [
    {
        username: 'Ashwin',
        message: 'Hey! How are you?',
        profileImage: 'https://picsum.photos/seed/arjun/100',
        messageStatus: 'sent',
        time: '07:44'
    },
    {
        username: 'John',
        message: 'Let’s meet up soon!',
        profileImage: 'https://picsum.photos/seed/ravi/100',
        messageStatus: 'received',
        time: '07:44'
    },
    {
        username: 'Aditi',
        message: 'Are we still meeting today?',
        profileImage: '',
        messageStatus: 'viewed',
        time: '07:44'
    },
    {
        username: 'Rahul',
        message: 'I’ve sent the report, check it out.',
        profileImage: 'https://picsum.photos/seed/rahul/100',
        messageStatus: 'received',
        time: '07:44'
    },
    {
        username: 'Priya',
        message: 'Looking forward to our call later.',
        profileImage: '',
        messageStatus: 'sent',
        time: '07:44'
    }
];

// Random background colors
const randomColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-teal-500'
];

// Function to get message status icon
const getMessageStatusIcon = (status: MessageStatus) => {
    switch (status) {
        case 'sent':
            return <Icon icon="ci:check" className="text-gray-200" />;
        case 'received':
            return <Icon icon="ci:check-all" className="text-gray-200" />;
        case 'viewed':
            return <Icon icon="ci:check-all" className="text-teal-300" />;
        default:
            return null;
    }
};

// Function to get a random background color from the list
const getRandomColor = () => {
    return randomColors[Math.floor(Math.random() * randomColors.length)];
};

const PinnedChats = () => {
    return (
        <div className="px-4 py-2 border-b border-neutral-700">
            <div className="flex items-center space-x-2">
                <Icon icon="lets-icons:pin-duotone" className="text-neutral-400" width="20" height="20" />
                <h3 className="text-sm font-bold">Pinned Chats</h3>
            </div>

            <ScrollArea className="h-[calc(3*3.3rem)] mt-2">
                <div className="space-y-2 mr-3">
                    {pinnedChats.map((chat, index) => (
                        <div key={index} className="flex items-center p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 rounded-lg !cursor-pointer !hover:cursor-pointer">
                            {/* Left: Profile Image or Initial */}
                            {chat.profileImage ? (
                                <img
                                    src={chat.profileImage}
                                    alt={chat.username}
                                    className="w-10 h-10 rounded-xl mr-4"
                                />
                            ) : (
                                <div
                                    className={`${getRandomColor()} w-10 h-10 rounded-xl flex items-center justify-center mr-4`}
                                >
                                    <span className="text-white font-semibold text-lg">
                                        {chat.username.charAt(0)}
                                    </span>
                                </div>
                            )}

                            {/* Middle: Username & Message */}
                            <div className="flex-1">
                                <div className="text-sm font-semibold">{chat.username}</div>
                                <div className="text-xs text-neutral-400 line-clamp-1">{chat.message}</div>
                            </div>

                            {/* Right: Time & Message Status */}
                            <div className="flex flex-col items-end">
                                <div className="text-xs text-neutral-500">{chat.time}</div>
                                <div className="mt-1">
                                    {getMessageStatusIcon(chat.messageStatus)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};

export default PinnedChats;
