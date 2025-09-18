import axiosInstance from '@/lib/axiosInstance';
import { UserProfile } from '@/types/user.type';

const URL = '/user/profile' as const;

export type ProfileQueryResult = UserProfile;

export const profileQuery = async (): Promise<ProfileQueryResult> => {
  const res = await axiosInstance.get(URL);

  return res.data;
};
