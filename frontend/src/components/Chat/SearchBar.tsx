import React from 'react';

interface SearchBarProps {
    placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full border rounded p-2 pl-10"
            />
            <span className="absolute left-2 top-2.5 text-gray-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z"
                    />
                </svg>
            </span>
        </div>
    );
};

export default SearchBar;
