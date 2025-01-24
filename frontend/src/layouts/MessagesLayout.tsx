import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { ScrollArea } from "@/components/ui/scroll-area"

const MessagesLayout: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isPinned, setIsPinned] = useState(false);

    const handleSearch = (value: string) => {
        setSearchTerm(value);
        console.log('Search:', value);
    };

    const togglePin = () => {
        setIsPinned((prev) => !prev);
    };

    // Avatar images
    const avatars = {
        sender: "https://picsum.photos/seed/sender/100",
        receiver: "https://picsum.photos/seed/receiver/100",
    };

    // Sample chat data
    const chatData = [
        { id: 1, sender: "receiver", message: "Hey! Are you free this evening?", time: "6:45 PM" },
        { id: 2, sender: "sender", message: "Hi! Yes, what's up?", time: "6:46 PM" },
        { id: 3, sender: "receiver", message: "Let's go out for dinner. It's been a while!", time: "6:47 PM" },
        { id: 4, sender: "sender", message: "Sure! Where should we meet?", time: "6:48 PM" },
        { id: 5, sender: "receiver", message: "How about the new Italian place downtown?", time: "6:49 PM" },
        { id: 6, sender: "sender", message: "Sounds good. I'll see you there at 8 PM!", time: "6:50 PM" },
        { id: 7, sender: "receiver", message: "Perfect! See you then.", time: "6:51 PM" },
        { id: 8, sender: "sender", message: "Looking forward to it. Bye!", time: "6:52 PM" },
        { id: 9, sender: "receiver", message: "Bye!", time: "6:53 PM" },
        { id: 10, sender: "receiver", message: "Don't forget to call me when you reach!", time: "6:54 PM" },
    ];

    return (
        <div className="flex flex-col gap-2 flex-1 h-[85vh] bg-neutral-900 rounded-3xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-white rounded-2xl">
                {/* Left Section */}
                <div className="flex items-center space-x-3">
                    <img
                        src="https://picsum.photos/seed/arjun/100"
                        alt="User"
                        className="w-10 h-10 rounded-xl"
                    />
                    <div>
                        <h3 className="text-lg font-bold">John Doe</h3>
                        <p className="text-sm text-green-600 font-semibold">Online</p>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="flex justify-center flex-grow">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-2 pr-10 h-10 text-sm border rounded-xl bg-gray-100 text-neutral-800 placeholder-gray-600 focus:outline-none"
                            placeholder="Search in chats..."
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <span className="absolute inset-y-0 right-2 flex items-center text-gray-600">
                            <Icon icon="ph:magnifying-glass-duotone" width="24" height="24" />
                        </span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-3">
                    {/* Pin/Unpin Button */}
                    <button
                        className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center hover:bg-gray-200 border"
                        onClick={togglePin}
                    >
                        {isPinned ? (
                            <Icon icon="lets-icons:pin-duotone" width="20" height="20" />
                        ) : (
                            <Icon icon="pepicons-print:pin-off" width="20" height="20" />
                        )}
                    </button>
                    {/* Options Button */}
                    <button className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center hover:bg-gray-200 border">
                        <Icon icon="ph:dots-three-outline-vertical-duotone" width="20" height="20" />
                    </button>
                </div>
            </div>

            <div className='bg-white rounded-2xl flex flex-col gap-2 flex-1 h-full pt-1'>
                {/* Body */}
                {/* <div className="flex-1 p-4 overflow-y-auto bg-gray-50"> */}
                <ScrollArea className="px-4 bg-gray-50 rounded-2xl">
                    <div className="space-y-6">
                        {chatData.map((chat) => (
                            <div
                                key={chat.id}
                                className={`flex items-start ${chat.sender === "sender" ? "justify-end space-x-3" : "space-x-3"}`}
                            >
                                {/* Avatar for Receiver */}
                                {chat.sender === "receiver" && (
                                    <img src={avatars.receiver} alt="Receiver" className="w-8 h-8 rounded-lg" />
                                )}

                                <div className={`space-y-1 text-sm ${chat.sender === "sender" ? "text-right" : ""}`}>
                                    <div
                                        className={`p-3 rounded-2xl shadow-sm max-w-lg ${chat.sender === "sender"
                                            ? "bg-blue-500 text-white rounded-br-sm"
                                            : "bg-gray-200 text-gray-900 rounded-bl-sm"
                                            }`}
                                    >
                                        {chat.message}
                                    </div>
                                    <div
                                        className={`flex items-center text-xs text-neutral-500 ${chat.sender === "sender" ? "justify-end" : ""
                                            } space-x-1`}
                                    >
                                        <span>{chat.time}</span>
                                        {chat.sender === "sender" && (
                                            <span className="">
                                                <Icon icon="mdi:check-all" className="text-blue-400" width="16" />
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Avatar for Sender */}
                                {chat.sender === "sender" && (
                                    <img src={avatars.sender} alt="Sender" className="w-8 h-8 rounded-lg" />
                                )}
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                {/* </div> */}

                {/* Input Bar */}
                <div className="p-4 border-t bg-white rounded-b-3xl">
                    <div className="relative">
                        {/* Input Field */}
                        <input
                            type="text"
                            className="w-full p-3 pr-10 bg-gray-100 text-gray-900 border border-gray-300 rounded-md placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Type a message..."
                        />

                        {/* Paper Plane Icon */}
                        <button
                            className="absolute inset-y-0 right-3 top-2 flex items-center justify-center w-8 h-8 rounded-md bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white transition duration-300 group"
                            title="Send"
                        >
                            <Icon
                                icon="mdi:send"
                                width="20"
                                height="20"
                                className="transition-transform duration-300 group-hover:rotate-[-40deg] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]"
                            />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagesLayout;