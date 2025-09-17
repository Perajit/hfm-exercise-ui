import BaseAlert from '@/components/_base/BaseAlert/BaseAlert';
import BaseForm, { BaseFormProps } from '@/components/_base/BaseForm/BaseForm';
import { useUserRegister } from '@/hooks/useUserRegister';
import { RegisterPayload } from '@/services/user/register.service';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import RegisterFormBody, { RegisterFormFieldValues } from './RegisterFormBody';

export type RegisterFormProps = {
  title?: BaseFormProps<RegisterFormFieldValues>['title'];
  className?: string;
  onSubmissionSuccess?: () => void;
  onSubmissionError?: (error: Error) => void;
};

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { title, className, onSubmissionSuccess, onSubmissionError } = props;

  const defaultTitle = 'Register';
  const submitButtonText = 'JOIN NOW';

  const {
    mutate,
    isPending,
    error,
    successAlertShown,
    setSuccessAlertShown,
    errorAlertShown,
    setErrorAlertShown,
  } = useUserRegister({
    onSuccess: onSubmissionSuccess,
    onError: onSubmissionError,
  });

  const submitHandler: SubmitHandler<RegisterFormFieldValues> = async (data) => {
    setSuccessAlertShown(false);
    setErrorAlertShown(false);

    const payload: RegisterPayload = {
      firstName: data.firstName,
      lastName: data.lastName,
      countryCode: data.countryCode,
      phoneNumber: data.phoneNumber,
      email: data.email,
      experience: data.experience,
    };

    mutate(payload);
  };

  return (
    <BaseForm<RegisterFormFieldValues>
      title={title ?? defaultTitle}
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
          className="mb-6"
          withDefaultIcon
          additionalContent={`Reason: ${(error as Error)?.message || 'Unknown error occurs.'}`}
          onDismiss={() => setErrorAlertShown(false)}
        >
          Sorry, we're unable to proceed your registration.
        </BaseAlert>
      ) : null}
      <RegisterFormBody />
    </BaseForm>
  );
};

export default RegisterForm;
