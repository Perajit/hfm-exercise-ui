import { profileQuery } from '@/services/user/getProfile.service';
import { useQuery } from '@tanstack/react-query';

export const useUserProfileQuery = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: profileQuery,
    retry: false,
  });
};
