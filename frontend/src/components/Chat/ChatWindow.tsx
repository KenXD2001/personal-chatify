import React from 'react';
import MessageChats from './MessageChats';
import SearchBar from './SearchBar';

const ChatWindow: React.FC = () => {
    return (
        <div className="flex flex-col flex-1 h-full bg-white">
            <div className="p-4 border-b">
                <h2 className="text-xl font-bold">Chat Window</h2>
                <SearchBar placeholder="Search messages..." />
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                <MessageChats />
            </div>
            <div className="p-4 border-t">
                <form className="flex gap-2">
                    <input
                        type="text"
                        className="flex-1 border rounded p-2"
                        placeholder="Type a message..."
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatWindow;
