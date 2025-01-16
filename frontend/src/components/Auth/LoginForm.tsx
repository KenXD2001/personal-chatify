import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';

const LoginForm: React.FC = () => {
    const navigate = useNavigate();

    // States for form inputs and error messages
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Mock email and password check
        const mockEmail = 'user@mail.com';
        const mockPassword = '123456';

        if (email !== mockEmail) {
            setError('No user found with that email');
            setShowForgotPassword(false); // Hide forgot password if email doesn't exist
            return;
        }

        if (password !== mockPassword) {
            setError('Incorrect password');
            setShowForgotPassword(true); // Show Forgot Password link if password is wrong
            return;
        }

        // Mock login success
        localStorage.setItem('authToken', 'sample-token');
        navigate('/chat');
    };

    return (
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl border-2 border-neutral-500 w-96">
            <h2 className="text-xl font-bold mb-4">Login</h2>

            {/* Email Input */}
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-neutral-400 w-full p-2 mb-4"
            />

            {/* Password Input */}
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-neutral-400 w-full p-2 mb-4"
            />

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="remember"
                    className="mr-2"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember">Remember Me</label>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Forgot Password link */}
            {showForgotPassword && (
                <div className="mb-4">
                    <button
                        type="button"
                        onClick={() => alert('Redirect to password reset page')}
                        className="text-sm text-blue-500 hover:underline"
                    >
                        Forgot Password?
                    </button>
                </div>
            )}

            {/* Form Actions */}
            <div className="flex gap-4 justify-between">
                <Button
                    type="button"
                    variant="outline"
                    className="border border-neutral-900 hover:bg-neutral-900"
                    onClick={() => navigate('/signup')} // Navigate to Signup page
                >
                    Register
                </Button>
                <Button
                    type="submit"
                    variant="default"
                >
                    Login
                </Button>
            </div>
        </form>
    );
};

export default LoginForm;
