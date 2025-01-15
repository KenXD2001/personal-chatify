import axios from "axios";

const API_URL = "https://your-api-url.com/api"; // Replace with your API URL

// Fetch all chat messages for a user
export const getMessages = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/chat/messages`, {
      params: { userId },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch messages"
      );
    }
    throw new Error("An unknown error occurred while fetching messages");
  }
};

// Send a message in a chat
export const sendMessage = async (
  fromUserId: string,
  toUserId: string,
  message: string
) => {
  try {
    const response = await axios.post(`${API_URL}/chat/send`, {
      fromUserId,
      toUserId,
      message,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data?.message || "Failed to send message"
      );
    }
    throw new Error("An unknown error occurred while sending message");
  }
};

// Create a new group
export const createGroup = async (
  creatorId: string,
  groupName: string,
  memberIds: string[]
) => {
  try {
    const response = await axios.post(`${API_URL}/chat/group/create`, {
      creatorId,
      groupName,
      memberIds,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data?.message || "Failed to create group"
      );
    }
    throw new Error("An unknown error occurred while creating group");
  }
};

// Invite a user to a group
export const inviteToGroup = async (groupId: string, userId: string) => {
  try {
    const response = await axios.post(`${API_URL}/chat/group/invite`, {
      groupId,
      userId,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response?.data?.message || "Failed to invite user");
    }
    throw new Error("An unknown error occurred while inviting user");
  }
};

// Accept or reject a group invitation
export const respondToGroupInvite = async (
  groupId: string,
  userId: string,
  accept: boolean
) => {
  try {
    const response = await axios.post(`${API_URL}/chat/group/respond`, {
      groupId,
      userId,
      accept,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response?.data?.message || "Failed to respond to group invite"
      );
    }
    throw new Error(
      "An unknown error occurred while responding to group invite"
    );
  }
};
