import axiosInstance from '@/lib/axiosInstance';

const URL = '/auth/logout' as const;

export type LoginResult = unknown;

export const logout = async (): Promise<LoginResult> => {
  const res = await axiosInstance.post(URL);

  return res.data;
};
