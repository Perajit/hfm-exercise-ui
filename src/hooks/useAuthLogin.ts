import { useAuthContext } from '@/context/AuthContext';
import { login, LoginResult } from '@/services/auth/login.service';
import { UserProfile } from '@/types/user.type';
import { MutationFunction, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useMutationWithFeedback } from './useMutationWithFeedback';

type UseAuthLoginParams = {
  onSuccess?: (data: LoginResult) => void;
  onError?: (error: Error | AxiosResponse['data']) => void;
};

export const useAuthLogin = (params?: UseAuthLoginParams) => {
  const queryClient = useQueryClient();
  const { setCurrentUser } = useAuthContext();

  const onSuccess = (data: LoginResult) => {
    const currentUser = data;
    queryClient.setQueryData<UserProfile | null>(['currentUser'], currentUser);

    setCurrentUser(currentUser);
    params?.onSuccess?.(currentUser);
  };

  return useMutationWithFeedback<LoginResult>({
    mutationFn: login as MutationFunction,
    onSuccess,
    onError: params?.onError,
  });
};
