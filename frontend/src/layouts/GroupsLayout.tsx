import React from 'react';

const GroupsLayout: React.FC = () => {
    return (
        <div className="flex flex-col h-full">
            <h2 className="text-white text-lg mb-4">Group Messages</h2>
            {/* Your Group Messages content goes here */}
            <div className="flex-1 bg-neutral-800 p-4 rounded-lg">Group Messages Section</div>
        </div>
    );
};

export default GroupsLayout;