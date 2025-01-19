// src/components/Chat/SearchBar.tsx

import React from 'react';

interface SearchBarProps {
    placeholder: string;
    onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
    return (
        <div className="relative">
            <input
                type="text"
                className="w-full px-4 py-2 border rounded"
                placeholder={placeholder}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
