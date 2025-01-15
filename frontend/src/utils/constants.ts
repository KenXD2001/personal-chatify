// App-wide constants

export const API_URL = "https://your-api-url.com/api"; // Replace with your API URL

export const STATUS = {
  PENDING: "Pending",
  ACCEPTED: "Accepted",
  REJECTED: "Rejected",
  DISPATCHED: "Dispatched",
};

export const DOCUMENT_TYPES = ["Aadhaar", "PAN", "Driving", "Voter ID"]; // Document types for uploads

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
export const SUPPORTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "application/pdf",
]; // Allowed file types

// Regex for validating email and phone number
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PHONE_REGEX = /^[0-9]{10}$/;
