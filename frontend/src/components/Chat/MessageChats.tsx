import React from 'react';

const messages = [
    { id: 1, sender: 'You', text: 'Hi, how are you?', timestamp: '10:00 AM' },
    { id: 2, sender: 'Friend', text: 'I’m good, thanks!', timestamp: '10:02 AM' },
    { id: 3, sender: 'You', text: 'What’s up?', timestamp: '10:05 AM' },
];

const MessageChats: React.FC = () => {
    return (
        <div className="space-y-4">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'
                        }`}
                >
                    <div
                        className={`p-3 rounded-lg ${message.sender === 'You'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-black'
                            }`}
                    >
                        <p>{message.text}</p>
                        <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageChats;
