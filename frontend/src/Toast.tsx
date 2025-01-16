// src/Toast.tsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles

// ToastProvider component: Wraps ToastContainer so that you can show toasts globally
const ToastProvider: React.FC = () => {
    return <ToastContainer />;
};

// A custom function to show toast notifications
export const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warn') => {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        case 'info':
            toast.info(message);
            break;
        case 'warn':
            toast.warn(message);
            break;
        default:
            toast(message);
            break;
    }
};

export default ToastProvider;
