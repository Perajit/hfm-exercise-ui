import axiosInstance from '@/lib/axiosInstance';

const URL = '/user/register' as const;

export type RegisterPayload = {
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  experience: string;
};

export type RegisterResult = object;

export const register = async (payload: RegisterPayload): Promise<RegisterResult> => {
  const res = await axiosInstance.post(URL, payload);
  return res.data;
};
