import { register, RegisterResult } from '@/services/user/register.service';
import { MutationFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useMutationWithFeedback } from './useMutationWithFeedback';

type UseUserRegisterParams = {
  onSuccess?: (data: unknown) => void;
  onError?: (error: Error | AxiosResponse['data']) => void;
};

export const useUserRegister = (params?: UseUserRegisterParams) => {
  return useMutationWithFeedback<RegisterResult>({
    mutationFn: register as MutationFunction,
    onSuccess: params?.onSuccess,
    onError: params?.onError,
  });
};
