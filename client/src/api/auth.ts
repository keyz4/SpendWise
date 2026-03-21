// import api from "./axios";

/**
 * Auth API Functions
 *
 * TODO: Connect to backend auth API
 * TODO: Handle JWT storage
 * TODO: Implement token refresh
 */

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

// TODO: Connect to backend auth API
export const loginUser = async (_payload: LoginPayload): Promise<AuthResponse> => {
  // TODO: Implement API call
  // const response = await api.post("/auth/login", payload);
  // return response.data;
  throw new Error("Not implemented yet");
};

// TODO: Connect to backend auth API
export const registerUser = async (_payload: RegisterPayload): Promise<AuthResponse> => {
  // TODO: Implement API call
  // const response = await api.post("/auth/register", payload);
  // return response.data;
  throw new Error("Not implemented yet");
};

// TODO: Implement get current user
export const getCurrentUser = async (): Promise<AuthResponse["user"]> => {
  // TODO: Implement API call
  // const response = await api.get("/auth/me");
  // return response.data;
  throw new Error("Not implemented yet");
};
