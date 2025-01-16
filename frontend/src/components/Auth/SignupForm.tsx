import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';

const SignupForm: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(prevState => !prevState);
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !mobile || !password || !confirmPassword) {
            toast.error('Please fill all the fields');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }

        const signupData = {
            name,
            email,
            mobile,
            password,
        };

        console.log('Signup Data:', signupData);

        toast.success('Account created successfully! Redirecting to login...');

        setTimeout(() => {
            navigate('/login');
        }, 3000);
    };

    return (
        <form onSubmit={handleSignup} className="bg-white p-8 rounded-3xl border-2 border-neutral-500 w-96">
            <h2 className="text-xl font-bold mb-4">Create an Account</h2>

            <div className='flex flex-col gap-4'>
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-neutral-400 w-full p-2 rounded"
                />

                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-neutral-400 w-full p-2 rounded"
                />

                <Input
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="border border-neutral-400 w-full p-2 rounded"
                />

                <div className='relative'>
                    <Input
                        type={isPasswordVisible ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-neutral-400 w-full p-2 rounded"
                    />

                    <div
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        <Icon icon={isPasswordVisible ? "ph:eye-duotone" : "ph:eye-slash-duotone"} width={20} height={20} />
                    </div>
                </div>

                <div className='relative'>
                    <Input
                        type={isConfirmPasswordVisible ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border border-neutral-400 w-full p-2 rounded"
                    />

                    <div
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                    >
                        <Icon icon={isConfirmPasswordVisible ? "ph:eye-duotone" : "ph:eye-slash-duotone"} width={20} height={20} />
                    </div>
                </div>

                <div className="flex gap-4 justify-between">
                    <Button
                        type="button"
                        variant="outline"
                        className="border border-neutral-900 hover:bg-neutral-900 w-full"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </Button>
                    <Button
                        type="submit"
                        variant="default"
                        className="w-full"
                    >
                        Create Account
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default SignupForm;
