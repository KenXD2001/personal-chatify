import { EMAIL_REGEX, PHONE_REGEX } from "./constants";

// Validate email format
export const validateEmail = (email: string): string | null => {
  if (!email) return "Email is required";
  if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address";
  return null;
};

// Validate phone number format (Indian 10-digit mobile number)
export const validatePhone = (phone: string): string | null => {
  if (!phone) return "Phone number is required";
  if (!PHONE_REGEX.test(phone))
    return "Please enter a valid 10-digit phone number";
  return null;
};

// Validate if passwords match
export const validatePasswordMatch = (
  password: string,
  confirmPassword: string
): string | null => {
  if (!password || !confirmPassword) return "Both password fields are required";
  if (password !== confirmPassword) return "Passwords do not match";
  return null;
};

// Validate password strength (at least one number, one uppercase letter, one special character, and a minimum length of 8)
export const validatePasswordStrength = (password: string): string | null => {
  const passwordStrengthRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!password) return "Password is required";
  if (!passwordStrengthRegex.test(password))
    return "Password must be at least 8 characters long, include one number, one uppercase letter, and one special character";
  return null;
};

// Validate if input is not empty
export const validateRequired = (
  input: string,
  fieldName: string
): string | null => {
  if (!input.trim()) return `${fieldName} is required`;
  return null;
};
