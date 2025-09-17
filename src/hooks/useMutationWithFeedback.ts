import { MutationFunction, useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useState } from 'react';

export type UseMutationWithFeedbackParams<T extends object> = {
  mutationFn: MutationFunction;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
};

export type UseMutationWithFeedbackResult = ReturnType<typeof useMutation> & {
  successAlertShown: boolean;
  setSuccessAlertShown: Dispatch<SetStateAction<boolean>>;
  errorAlertShown: boolean;
  setErrorAlertShown: Dispatch<SetStateAction<boolean>>;
};

export const useMutationWithFeedback = <T extends object>(params: UseMutationWithFeedbackParams<T>): UseMutationWithFeedbackResult => {
  const { mutationFn, onSuccess, onError } = params;

  // Alerts
  const [successAlertShown, setSuccessAlertShown] = useState(false);
  const [errorAlertShown, setErrorAlertShown] = useState(false);

  // Mutation
  const mutationResult = useMutation({
    mutationFn: mutationFn as MutationFunction<T>,
    onSuccess: (data) => {
      setSuccessAlertShown(true);
      onSuccess?.(data);
    },
    onError: (error) => {
      setErrorAlertShown(true);
      onError?.(error);
    },
  });

  return {
    ...mutationResult,
    successAlertShown,
    setSuccessAlertShown,
    errorAlertShown,
    setErrorAlertShown,
  };
};
