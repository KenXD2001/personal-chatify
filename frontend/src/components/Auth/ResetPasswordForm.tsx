import React, { useState } from 'react';

const ResetPasswordForm: React.FC = () => {
    const [step, setStep] = useState(1); // Steps: 1 = Email, 2 = OTP, 3 = New Password

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) setStep(step + 1);
    };

    return (
        <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleNextStep}>
            <h2 className="text-xl font-bold mb-4">
                {step === 1 ? 'Reset Password' : step === 2 ? 'Verify OTP' : 'New Password'}
            </h2>
            {step === 1 && (
                <>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="border rounded w-full p-2 mb-4"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white w-full p-2 rounded"
                    >
                        Send OTP
                    </button>
                </>
            )}
            {step === 2 && (
                <>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        className="border rounded w-full p-2 mb-4"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white w-full p-2 rounded"
                    >
                        Verify OTP
                    </button>
                </>
            )}
            {step === 3 && (
                <>
                    <input
                        type="password"
                        placeholder="New Password"
                        className="border rounded w-full p-2 mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="border rounded w-full p-2 mb-4"
                    />
                    <button
                        type="submit"
                        className="bg-green-500 text-white w-full p-2 rounded"
                    >
                        Reset Password
                    </button>
                </>
            )}
        </form>
    );
};

export default ResetPasswordForm;
