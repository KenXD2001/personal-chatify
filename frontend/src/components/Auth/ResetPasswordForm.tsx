import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Icon } from '@iconify/react';

const ResetPasswordForm: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // Steps: 1 = Email, 2 = OTP, 3 = New Password
    const [email, setEmail] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState<boolean>(false);
    const [isNewConfirmPasswordVisible, setIsNewConfirmPasswordVisible] = useState<boolean>(false);

    const toggleNewPasswordVisibility = () => {
        setIsNewPasswordVisible(prevState => !prevState);
    };

    const toggleNewConfirmPasswordVisibility = () => {
        setIsNewConfirmPasswordVisible(prevState => !prevState);
    };

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();

        if (step === 1) {
            if (!email) {
                toast.error('Please enter your email');
                return;
            }
            toast.success('OTP sent to your email');
        } else if (step === 2) {
            if (!otp) {
                toast.error('Please enter the OTP');
                return;
            }
            toast.success('OTP verified successfully');
        } else if (step === 3) {
            if (!newPassword || !confirmPassword) {
                toast.error('Please fill in both password fields');
                return;
            }
            if (newPassword !== confirmPassword) {
                toast.error('Passwords do not match');
                return;
            }
            toast.success('Password reset successfully');

            setTimeout(() => {
                navigate('/login');
            }, 3000);
        }

        setStep((prevStep) => prevStep + 1);
    };

    const handleCancel = () => {
        navigate('/login');
    };

    return (
        <form
            className="bg-white p-8 rounded-3xl border-2 border-neutral-500 w-96"
            onSubmit={handleNextStep}
        >
            <h2 className="text-xl font-bold mb-4 text-center">
                {step === 1 ? 'Reset Password' : step === 2 ? 'Verify OTP' : 'New Password'}
            </h2>

            <div className="flex flex-col gap-4">
                {step === 1 && (
                    <>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-neutral-400 w-full p-2"
                        />
                        <p className="text-xs text-neutral-500">
                            We will send a One-Time Password (OTP) to this email.
                        </p>
                    </>
                )}

                {step === 2 && (
                    <>
                        <Input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="border border-neutral-400 w-full p-2"
                        />
                        <p className="text-xs text-neutral-500">
                            Check your email for the OTP we sent.
                        </p>
                    </>
                )}

                {step === 3 && (
                    <>
                        <div className='relative'>
                            <Input
                                type={isNewPasswordVisible ? 'text' : 'password'}
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="border border-neutral-400 w-full p-2"
                            />

                            <div
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={toggleNewPasswordVisibility}
                            >
                                <Icon icon={isNewPasswordVisible ? "ph:eye-duotone" : "ph:eye-slash-duotone"} width={20} height={20} />
                            </div>
                        </div>
                        <div className='relative'>
                            <Input
                                type={isNewConfirmPasswordVisible ? 'text' : 'password'}
                                placeholder="Confirm New Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="border border-neutral-400 w-full p-2"
                            />

                            <div
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={toggleNewConfirmPasswordVisibility}
                            >
                                <Icon icon={isNewConfirmPasswordVisible ? "ph:eye-duotone" : "ph:eye-slash-duotone"} width={20} height={20} />
                            </div>
                        </div>
                    </>
                )}

                <div className="flex gap-4 justify-between">
                    <Button
                        type="button"
                        variant="outline"
                        className="border border-neutral-900 hover:bg-neutral-900 w-full"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="default"
                        className="w-full"
                    >
                        {step === 1
                            ? 'Send OTP'
                            : step === 2
                                ? 'Verify OTP'
                                : 'Reset Password'}
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default ResetPasswordForm;
