import { registerAccount } from '@/services/account.api';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

type UseRegisterParams = {
  onSuccess?: (data: unknown) => void;
  onError?: (error: Error | AxiosResponse['data']) => void;
};

export const useRegisterAccountMutation = (params?: UseRegisterParams) => {
  return useMutation({
    mutationFn: registerAccount,
    onSuccess: params?.onSuccess,
    onError: params?.onError,
  });
};
