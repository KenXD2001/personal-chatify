const onlineUsers = [
    { id: 1, name: 'Arjun', image: `https://picsum.photos/seed/arjun/100` },
    { id: 2, name: 'Kiran', image: null },
    { id: 3, name: 'Ravi', image: `https://picsum.photos/seed/ravi/100` },
    { id: 4, name: 'Sita', image: null },
    { id: 5, name: 'Meera', image: `https://picsum.photos/seed/meera/100` },
    { id: 6, name: 'Ajay', image: `https://picsum.photos/seed/ajay/100` },
    { id: 7, name: 'Priya', image: null },
    { id: 8, name: 'Vikram', image: `https://picsum.photos/seed/vikram/100` },
    { id: 9, name: 'Rhea', image: `https://picsum.photos/seed/rhea/100` },
    { id: 10, name: 'Anjali', image: null },
    { id: 11, name: 'Rahul', image: `https://picsum.photos/seed/rahul/100` },
    { id: 12, name: 'Devika', image: `https://picsum.photos/seed/devika/100` },
    { id: 13, name: 'Manish', image: null },
    { id: 14, name: 'Kajal', image: `https://picsum.photos/seed/kajal/100` },
    { id: 15, name: 'Rajesh', image: null },
    { id: 16, name: 'Sanjay', image: `https://picsum.photos/seed/sanjay/100` },
    { id: 17, name: 'Pooja', image: null },
    { id: 18, name: 'Naina', image: `https://picsum.photos/seed/naina/100` },
    { id: 19, name: 'Omkar', image: null },
    { id: 20, name: 'Pranav', image: `https://picsum.photos/seed/pranav/100` }
];

const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500", "bg-purple-500"];

function OnlineUsers() {
    const firstFourUsers = onlineUsers.slice(0, 4);
    const remainingCount = onlineUsers.length - 4;

    return (
        <div className="p-4 pb-2 border-b border-neutral-700">
            <h3 className="text-md font-bold">Messages</h3>
            <div className="flex space-x-2 mt-2">
                {firstFourUsers.map((user, index) => (
                    <div
                        key={user.id}
                        className="p-1 flex flex-col items-center justify-center gap-2 rounded-xl shadow-sm bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 rounded-lg !cursor-pointer !hover:cursor-pointer"
                    >
                        {user.image ? (
                            <img
                                src={user.image}
                                alt={user.name}
                                className="user-photo w-10 h-10 rounded-xl object-cover"
                            />
                        ) : (
                            <div
                                className={`user-photo w-10 h-10 ${colors[index % colors.length]} rounded-xl flex items-center justify-center text-white font-bold text-xl`}
                            >
                                {user.name[0]}
                            </div>
                        )}
                        <div className="user-name text-xs font-medium text-white">
                            {user.name}
                        </div>
                    </div>
                ))}
                {/* 5th Card: Remaining Users Count */}
                <div
                    className="p-1 flex flex-col items-center justify-center gap-2 rounded-xl shadow-sm bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 rounded-lg !cursor-pointer !hover:cursor-pointer"
                >
                    <div
                        className="user-photo w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold"
                    >
                        +{remainingCount}
                    </div>
                    <div className="user-name text-xs font-medium text-white">
                        Others
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineUsers;
