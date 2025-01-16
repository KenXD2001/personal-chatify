import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const handleForgotPassword = () => {
        navigate('/reset-password');
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Please fill in both email and password');
            return;
        }

        const mockEmail = 'user@mail.com';
        const mockPassword = '123456';

        if (email !== mockEmail) {
            toast.error('No user found with that email');
            setShowForgotPassword(false);
            return;
        }

        if (password !== mockPassword) {
            toast.error('Incorrect password');
            setShowForgotPassword(true);
            return;
        }

        localStorage.setItem('authToken', 'sample-token');
        navigate('/chat');
    };

    return (
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl border-2 border-neutral-500 w-96">
            <h2 className="text-xl font-bold mb-4">Login</h2>

            <div className='flex flex-col gap-4'>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-neutral-400 w-full p-2"
                />

                <div className="relative">
                    <Input
                        type={isPasswordVisible ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-neutral-400 w-full p-2"
                    />

                    <div
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        <Icon icon={isPasswordVisible ? "ph:eye-duotone" : "ph:eye-slash-duotone"} width={20} height={20} />
                    </div>
                </div>

                <div className='flex gap-3 items-center justify-between'>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="!cursor-pointer"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <Label className="text-xs hover:cursor-pointer" htmlFor="remember">Remember Me</Label>
                    </div>

                    {showForgotPassword && (
                        <div className="mb-4">
                            <button
                                type="button"
                                onClick={handleForgotPassword}
                                className="text-xs text-blue-500 hover:underline"
                            >
                                Forgot Password?
                            </button>
                        </div>
                    )}
                </div>

                <div className="flex gap-4 justify-between">
                    <Button
                        type="button"
                        variant="outline"
                        className="border border-neutral-900 hover:bg-neutral-900 w-full"
                        onClick={() => navigate('/signup')}
                    >
                        Register
                    </Button>
                    <Button
                        type="submit"
                        variant="default"
                        className="w-full"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
