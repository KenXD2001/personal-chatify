import axios from "axios";

const API_URL = "https://your-api-url.com/api"; // Replace with your API URL

// Register a new user
export const signup = async (
  name: string,
  email: string,
  mobile: string,
  password: string
) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      name,
      email,
      mobile,
      password,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response?.data?.message || "Signup failed");
    }
    throw new Error("An unknown error occurred during signup");
  }
};

// Login an existing user
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
    throw new Error("An unknown error occurred during login");
  }
};

// Send OTP for password reset
export const sendOtp = async (email: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/send-otp`, { email });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response?.data?.message || "Failed to send OTP");
    }
    throw new Error("An unknown error occurred while sending OTP");
  }
};

// Reset password using OTP
export const resetPassword = async (
  email: string,
  otp: string,
  newPassword: string
) => {
  try {
    const response = await axios.post(`${API_URL}/auth/reset-password`, {
      email,
      otp,
      newPassword,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response?.data?.message || "Password reset failed");
    }
    throw new Error("An unknown error occurred during password reset");
  }
};
