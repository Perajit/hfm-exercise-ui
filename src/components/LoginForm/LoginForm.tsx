import BaseAlert from '@/components/_base/BaseAlert/BaseAlert';
import BaseForm, { BaseFormProps } from '@/components/_base/BaseForm/BaseForm';
import { useAuthLogin } from '@/hooks/useAuthLogin';
import { LoginResult } from '@/services/auth/login.service';
import { FC } from 'react';
import LoginFormBody, { LoginFormFieldValues } from './LoginFormBody';

export type LoginFormProps = {
  title?: BaseFormProps<LoginFormFieldValues>['title'];
  className?: string;
  onSubmissionSuccess?: (data: LoginResult) => void;
  onSubmissionError?: (error: Error) => void;
};

const LoginForm: FC<LoginFormProps> = (props) => {
  const { title, className = '', onSubmissionSuccess, onSubmissionError } = props;

  const submitButtonText = 'LOGIN';

  const {
    mutate,
    isPending,
    error,
    successAlertShown,
    setSuccessAlertShown,
    errorAlertShown,
    setErrorAlertShown,
  } = useAuthLogin({
    onSuccess: onSubmissionSuccess,
    onError: onSubmissionError,
  });

  const submitHandler = (formValues: LoginFormFieldValues) => {
    setErrorAlertShown(false);
    mutate(formValues);
  };

  return (
    <BaseForm<LoginFormFieldValues>
      title={title}
      submitButtonText={submitButtonText}
      className={className}
      submitHandler={submitHandler}
      submissionIsPending={isPending}
    >
      {successAlertShown ? (
        <BaseAlert
          data-testid="success-alert"
          color="success"
          className="mb-6"
          withDefaultIcon
          withBorderAccent
          additionalContent={'You request has been submitted successfully.'}
          onDismiss={() => setSuccessAlertShown(false)}
        >
          Congratulations!
        </BaseAlert>
      ) : null}
      {errorAlertShown ? (
        <BaseAlert
          data-testid="error-alert"
          color="failure"
          className="my-6"
          withDefaultIcon
          additionalContent={`Reason: ${(error as Error)?.message || 'Unknown error occurs.'}`}
          onDismiss={() => setErrorAlertShown(false)}
        >
          Failed to login to your account.
        </BaseAlert>
      ) : null}
      <LoginFormBody />
    </BaseForm>
  );
};

export default LoginForm;
