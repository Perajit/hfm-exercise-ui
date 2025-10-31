import BaseCheckbox from '@/components/_base/BaseCheckbox/BaseCheckbox';
import BaseSelect from '@/components/_base/BaseSelect/BaseSelect';
import BaseTextInput from '@/components/_base/BaseTextInput/BaseTextInput';
import { countries, countrySelectionOptions } from '@/constants/countries';
import { experienceSelectionOptions } from '@/constants/experiences';
import { ChangeEventHandler, FC } from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import PrivacyPolicyModalTrigger from './PrivacyPolicyModalTrigger';
import TermsAndConditionsModalTrigger from './TermsAndConditionsModalTrigger';

export type RegisterFormFieldValues = {
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneCode: string;
  phoneNumber: string;
  email: string;
  experience: string;
  conditionsAccepted: boolean;
};

type ReigsterFormKeys = keyof RegisterFormFieldValues;

type RegisterFormRules = {
  [K in ReigsterFormKeys]?: RegisterOptions<RegisterFormFieldValues, K>;
};

const validationPatterns = {
  email: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
  numeric: new RegExp('^\\d+$'),
  noSpecialCharacter: new RegExp('^[^~`!@#$%^&*()_\\-\\+={}\\[\\]|\\\\:;”‘"\'<>,.?/]+$'),
};

const registerFormRules: RegisterFormRules = {
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

const RegisterFormBody: FC = () => {
  const { control, formState, setValue, clearErrors } = useFormContext<RegisterFormFieldValues>();
  const formErrors = formState.errors;

  type InputChangeHandler = ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;

  const getInputChangeHandler = (key: ReigsterFormKeys): InputChangeHandler => {
    return (e) => {
      setValue(key, e.target.value);
      clearErrors(key);
    };
  };

  type SelectChangeHandler = (value: string) => void;

  const countryCodeChangeHandler: SelectChangeHandler = (value: string) => {
    setValue('countryCode', value);
    setValue('phoneCode', `+${countries[value].phoneCode}`);
    clearErrors('countryCode');
  };

  const experienceChangeHandler: SelectChangeHandler = (value: string) => {
    setValue('experience', value);
    clearErrors('experience');
  };

  type CheckboxChangeHandler = ChangeEventHandler<HTMLInputElement>;

  const conditionsAcceptedChangeHandler: CheckboxChangeHandler = (e) => {
    setValue('conditionsAccepted', e.target.checked);
    clearErrors('conditionsAccepted');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      <Controller
        control={control}
        name="firstName"
        rules={registerFormRules.firstName}
        render={({ field }) => (
          <BaseTextInput
            data-testid="first-name-input"
            type="text"
            placeholder="First Name"
            errorMessage={formErrors.firstName?.message}
            value={field.value}
            onBlur={field.onBlur}
            onChange={getInputChangeHandler('firstName')}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        rules={registerFormRules.lastName}
        render={({ field }) => (
          <BaseTextInput
            data-testid="last-name-input"
            type="text"
            placeholder="Last Name"
            errorMessage={formErrors.lastName?.message}
            value={field.value}
            onBlur={field.onBlur}
            onChange={getInputChangeHandler('lastName')}
          />
        )}
      />
      <Controller
        control={control}
        name="countryCode"
        rules={registerFormRules.countryCode}
        render={({ field }) => (
          <BaseSelect
            data-testid="country-code-select"
            placeholder="Country"
            options={countrySelectionOptions}
            errorMessage={formErrors.countryCode?.message}
            value={field.value}
            onChange={countryCodeChangeHandler}
          />
        )}
      />
      <div className="grid grid-cols-4 gap-4 md:gap-2">
        <Controller
          control={control}
          name="phoneCode"
          rules={registerFormRules.phoneCode}
          render={({ field }) => (
            <BaseTextInput
              data-testid="phone-code-input"
              type="text"
              placeholder="Code"
              className="col-span-4 md:col-span-1"
              disabled
              value={field.value}
            />
          )}
        />
        <Controller
          control={control}
          name="phoneNumber"
          rules={registerFormRules.phoneNumber}
          render={({ field }) => (
            <BaseTextInput
              data-testid="phone-number-input"
              type="numeric"
              placeholder="Phone"
              className="col-span-4 md:col-span-3"
              errorMessage={formErrors.phoneNumber?.message}
              value={field.value}
              onBlur={field.onBlur}
              onChange={getInputChangeHandler('phoneNumber')}
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="email"
        rules={registerFormRules.email}
        render={({ field }) => (
          <BaseTextInput
            data-testid="email-input"
            type="email"
            placeholder="Email"
            errorMessage={formErrors.email?.message}
            value={field.value}
            onBlur={field.onBlur}
            onChange={getInputChangeHandler('email')}
          />
        )}
      />
      <Controller
        control={control}
        name="experience"
        rules={registerFormRules.experience}
        render={({ field }) => (
          <BaseSelect
            data-testid="experience-select"
            placeholder="Experience"
            options={experienceSelectionOptions}
            errorMessage={formErrors.experience?.message}
            value={field.value}
            onBlur={field.onBlur}
            onChange={experienceChangeHandler}
          />
        )}
      />
      <Controller
        control={control}
        name="conditionsAccepted"
        rules={registerFormRules.conditionsAccepted}
        render={({ field }) => (
          <BaseCheckbox
            id="erms-and-conditions-chk"
            data-testid="erms-and-conditions-chk"
            label={(
              <span className="text-xs text-muted">
                I have read and accepted the <PrivacyPolicyModalTrigger /> and <TermsAndConditionsModalTrigger />
              </span>
            )}
            className="md:col-span-2 pt-2"
            errorMessage={formErrors.conditionsAccepted?.message}
            checked={field.value}
            onBlur={field.onBlur}
            onChange={conditionsAcceptedChangeHandler}
          />
        )}
      />
    </div>
  );
};

export default RegisterFormBody;
