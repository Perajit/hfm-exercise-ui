import axiosInstance from '@/lib/axiosInstance';
import { UserProfile } from '@/types/user.type';

const URL = '/auth/login' as const;

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginResult = UserProfile;

export const login = async (payload: LoginPayload): Promise<LoginResult> => {
  const res = await axiosInstance.post(URL, payload);

  return res.data;
};
