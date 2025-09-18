import { useAuthContext } from '@/context/AuthContext';
import { logout } from '@/services/auth/logout.service';
import { MutationFunction, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useMutationWithFeedback } from './useMutationWithFeedback';

type UseAuthLogoutParams = {
  onSuccess?: () => void;
  onError?: (error: Error | AxiosResponse['data']) => void;
};

export const useAuthLogout = (params?: UseAuthLogoutParams) => {
  const queryClient = useQueryClient();
  const { setCurrentUser } = useAuthContext();

  const onSuccess = () => {
    queryClient.removeQueries({
      queryKey: ['currentUser'],
      exact: true,
    });
    queryClient.setQueryData(['currentCuser'], null);

    setCurrentUser(null);
    params?.onSuccess?.();
  };

  return useMutationWithFeedback({
    mutationFn: logout as MutationFunction,
    onSuccess,
    onError: params?.onError,
  });
};
