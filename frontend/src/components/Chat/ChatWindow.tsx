import React, { useState } from 'react';
import { Button } from '../ui/button';

const ChatWindow: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value: string) => {
        setSearchTerm(value);
        console.log('Search:', value);
    };

    return (
        <div className="flex flex-col flex-1 h-full bg-gray-50 rounded-3xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
                <div>
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
                <input
                    type="text"
                    className="p-2 border rounded-md"
                    placeholder="Search in chats..."
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            {/* Body */}
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                    {/* Received Message */}
                    <div className="flex items-start space-x-2">
                        <div className="bg-gray-200 p-3 rounded-lg">
                            Hello! How are you?
                        </div>
                    </div>

                    {/* Sent Message */}
                    <div className="flex items-end justify-end space-x-2">
                        <div className="bg-blue-500 text-white p-3 rounded-lg">
                            I'm good, thank you! What about you?
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        className="flex-1 p-2 border rounded-md"
                        placeholder="Type a message..."
                    />
                    <Button className="bg-blue-500">Send</Button>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
