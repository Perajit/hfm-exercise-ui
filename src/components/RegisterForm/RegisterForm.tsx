import BaseAlert from '@/components/_base/BaseAlert/BaseAlert';
import BaseButton from '@/components/_base/BaseButton/BaseButton';
import BaseCheckbox from '@/components/_base/BaseCheckbox/BaseCheckbox';
import BaseDropdown from '@/components/_base/BaseDropdown/BaseDropdown';
import BaseTextInput from '@/components/_base/BaseTextInput/BaseTextInput';
import { countries, countrySelectionOptions } from '@/constants/countries';
import { experienceSelectionOptions } from '@/constants/experiences';
import { useRegisterAccountMutation } from '@/hooks/useRegisterAccountMutation';
import { RegisterAccountPayload } from '@/services/account.api';
import { Spinner } from 'flowbite-react';
import { ChangeEventHandler, FC, ReactNode, useCallback, useState } from 'react';
import { RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import PrivacyPolicyModalTrigger from './PrivacyPolicyModalTrigger';
import TermsAndConditionsModalTrigger from './TermsAndConditionsModalTrigger';

const validationPatterns = {
  email: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
  numeric: new RegExp('^\\d+$'),
  noSpecialCharacter: new RegExp('^[^~`!@#$%^&*()_\\-\\+={}\\[\\]|\\\\:;”‘"\'<>,.?/]+$'),
};

export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneCode: string;
  phoneNumber: string;
  email: string;
  experience: string;
  conditionsAccepted: boolean;
};

type ReigsterFormKeys = keyof RegisterFormValues;

type RegisterFormValidations = {
  [K in ReigsterFormKeys]?: RegisterOptions<RegisterFormValues, K>;
};

const registerFormValidations: RegisterFormValidations = {
  firstName: {
    required: 'First name is required.',
    validate: {
      matchPattern: (v) => validationPatterns.noSpecialCharacter.test(v) || 'First name must not contain special character.',
    },
  },
  lastName: {
    required: 'Last name is required.',
    validate: {
      matchPattern: (v) => validationPatterns.noSpecialCharacter.test(v) || 'Last name must not contain special character.',
    },
  },
  countryCode: {
    required: 'Country is required.',
  },
  phoneCode: {},
  phoneNumber: {
    required: 'Phone is required.',
    validate: {
      matchPattern: (v) => validationPatterns.numeric.test(v) || 'Phone must be numeric.',
    },
  },
  email: {
    required: 'Email is required.',
    validate: {
      matchPattern: (v) => validationPatterns.email.test(v) || 'Email format is invalid.',
    },
  },
  experience: {
    required: 'Experience is required.',
  },
  conditionsAccepted: {
    required: 'Privacy Policy and Terms and Conditions must be accepted.',
  },
};

export type RegisterFormProps = {
  title: ReactNode;
  onSubmissionSuccess?: () => void;
  onSubmissionError?: (error: Error) => void;
};

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { title, onSubmissionSuccess, onSubmissionError } = props;

  // Alerts
  const [errorAlertShown, setErrorAlertShown] = useState(false);
  const [successAlertShown, setSuccessAlertShown] = useState(false);

  // Form handling
  const { register, handleSubmit, setValue, formState, clearErrors } = useForm<RegisterFormValues>({
    defaultValues: {
      countryCode: '',
    },
    shouldFocusError: false,
    reValidateMode: 'onBlur',
  });
  const formErrors = formState.errors;

  // Form submission
  const { mutateAsync, isPending, error } = useRegisterAccountMutation({
    onSuccess: () => {
      setSuccessAlertShown(true);
      onSubmissionSuccess?.();
    },
    onError: (error) => {
      setErrorAlertShown(true);
      onSubmissionError?.(error);
    },
  });

  type InputChangeHandler = ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;

  const getInputChangeHandler = useCallback((key: ReigsterFormKeys): InputChangeHandler => {
    return (e) => {
      setValue(key, e.target.value);
    };
  }, [setValue]);

  type DropdownChangeHandler = (value: string) => void;

  const countryDropdownChangeHandler: DropdownChangeHandler = useCallback((value: string) => {
    setValue('countryCode', value);
    setValue('phoneCode', `+${countries[value].phoneCode}`);
    clearErrors('countryCode');
  }, [setValue]);

  const experienceDropdownChangeHandler: DropdownChangeHandler = useCallback((value: string) => {
    setValue('experience', value);
    clearErrors('experience');
  }, [setValue]);

  type CheckboxChangeHandler = ChangeEventHandler<HTMLInputElement>;

  const conditionsAcceptedChangeHandler: CheckboxChangeHandler = useCallback((e) => {
    setValue('conditionsAccepted', e.target.checked);
  }, [setValue]);

  const submitHandler: SubmitHandler<RegisterFormValues> = async (data) => {
    setSuccessAlertShown(false);
    setErrorAlertShown(false);

    const payload: RegisterAccountPayload = {
      firstName: data.firstName,
      lastName: data.lastName,
      countryCode: data.countryCode,
      phoneNumber: data.phoneNumber,
      email: data.email,
      experience: data.experience,
    };

    mutateAsync(payload);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <h2 className="text-2xl text-center font-bold mb-8">{title}</h2>
      {successAlertShown ? (
        <BaseAlert
          data-testid="success-alert"
          color="success"
          className="mb-6"
          withDefaultIcon
          withBorderAccent
          additionalContent="You request has been submitted successfully."
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
          withBorderAccent
          additionalContent={`Reason: ${error?.message || 'Unknown error occurs.'}`}
          onDismiss={() => setErrorAlertShown(false)}
        >
          Sorry, we're unable to proceed your registration.
        </BaseAlert>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <BaseTextInput
          data-testid="first-name-input"
          type="text"
          placeholder="First Name"
          {...register('firstName', registerFormValidations.firstName)}
          errorMessage={formErrors.firstName?.message}
          onChange={getInputChangeHandler('firstName')}
        />
        <BaseTextInput
          data-testid="last-name-input"
          type="text"
          placeholder="Last Name"
          {...register('lastName', registerFormValidations.lastName)}
          errorMessage={formErrors.lastName?.message}
          onChange={getInputChangeHandler('lastName')}
        />
        <BaseDropdown
          data-testid="country-code-dropdown"
          placeholder="Country"
          options={countrySelectionOptions}
          {...register('countryCode', registerFormValidations.countryCode)}
          errorMessage={formErrors.countryCode?.message}
          onChange={countryDropdownChangeHandler}
        />
        <div className="grid grid-cols-4 gap-2">
          <BaseTextInput
            data-testid="phone-code-input"
            type="text"
            placeholder="Code"
            disabled
            {...register('phoneCode', registerFormValidations.phoneCode)}
          />
          <BaseTextInput
            data-testid="phone-number-input"
            type="numeric"
            placeholder="Phone"
            className="col-span-3"
            {...register('phoneNumber', registerFormValidations.phoneNumber)}
            errorMessage={formErrors.phoneNumber?.message}
            onChange={getInputChangeHandler('phoneNumber')}
          />
        </div>
        <BaseTextInput
          data-testid="email-input"
          type="email"
          placeholder="Email"
          {...register('email', registerFormValidations.email)}
          errorMessage={formErrors.email?.message}
          onChange={getInputChangeHandler('email')}
        />
        <BaseDropdown
          data-testid="experience-dropdown"
          placeholder="Experience"
          options={experienceSelectionOptions}
          {...register('experience', registerFormValidations.experience)}
          errorMessage={formErrors.experience?.message}
          onChange={experienceDropdownChangeHandler}
        />
        <BaseCheckbox
          id="erms-and-conditions-chk"
          data-testid="erms-and-conditions-chk"
          label={(
            <span className="text-xs text-muted">
              I have read and accepted the <PrivacyPolicyModalTrigger /> and <TermsAndConditionsModalTrigger />
            </span>
          )}
          className="md:col-span-2 pt-2"
          {...register('conditionsAccepted', registerFormValidations.conditionsAccepted)}
          errorMessage={formErrors.conditionsAccepted?.message}
          onChange={conditionsAcceptedChangeHandler}
        />
      </div>
      <div className="text-center">
        <BaseButton
          data-testid="submit-button"
          type="submit"
          color="green"
          size="lg"
          className="w-[307px] mx-auto !rounded-smd gap-4"
          disabled={isPending}
        >
          {isPending ? (
            <Spinner aria-label="Submitting request." className={isPending ? '' : 'hidden'} />
          ) : (
            'JOIN NOW'
          )}
        </BaseButton>
      </div>
    </form>
  );
};

export default RegisterForm;
