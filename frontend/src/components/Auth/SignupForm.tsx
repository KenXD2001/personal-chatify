import React from 'react';

const SignupForm: React.FC = () => {
    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Signup submitted');
    };

    return (
        <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-xl font-bold mb-4">Create an Account</h2>
            <input
                type="text"
                placeholder="Name"
                className="border rounded w-full p-2 mb-4"
            />
            <input
                type="email"
                placeholder="Email"
                className="border rounded w-full p-2 mb-4"
            />
            <input
                type="tel"
                placeholder="Mobile Number"
                className="border rounded w-full p-2 mb-4"
            />
            <input
                type="date"
                placeholder="Date of Birth"
                className="border rounded w-full p-2 mb-4"
            />
            <input
                type="password"
                placeholder="Password"
                className="border rounded w-full p-2 mb-4"
            />
            <input
                type="password"
                placeholder="Confirm Password"
                className="border rounded w-full p-2 mb-4"
            />
            <button
                type="submit"
                className="bg-green-500 text-white w-full p-2 rounded"
            >
                Create Account
            </button>
        </form>
    );
};

export default SignupForm;
