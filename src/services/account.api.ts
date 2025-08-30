import axiosInstance from '@/lib/axiosInstance';

const REGISTER_URL = '/account/register' as const;

export type RegisterAccountPayload = {
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  experience: string;
};

export const registerAccount = async (payload: RegisterAccountPayload) => {
  return axiosInstance.post(REGISTER_URL, payload);
};
