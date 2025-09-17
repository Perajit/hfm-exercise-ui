import BaseCheckbox from '@/components/_base/BaseCheckbox/BaseCheckbox';
import BaseSelect from '@/components/_base/BaseSelect/BaseSelect';
import BaseTextInput from '@/components/_base/BaseTextInput/BaseTextInput';
import { countries, countrySelectionOptions } from '@/constants/countries';
import { experienceSelectionOptions } from '@/constants/experiences';
import { ChangeEventHandler, FC } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import PrivacyPolicyModalTrigger from './PrivacyPolicyModalTrigger';
import TermsAndConditionsModalTrigger from './TermsAndConditionsModalTrigger';

const validationPatterns = {
  email: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
  numeric: new RegExp('^\\d+$'),
  noSpecialCharacter: new RegExp('^[^~`!@#$%^&*()_\\-\\+={}\\[\\]|\\\\:;”‘"\'<>,.?/]+$'),
};

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
  const { register, formState, setValue, clearErrors } = useFormContext<RegisterFormFieldValues>();
  const formErrors = formState.errors;

  type InputChangeHandler = ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;

  const getInputChangeHandler = (key: ReigsterFormKeys): InputChangeHandler => {
    return (e) => {
      setValue(key, e.target.value);
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
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      <BaseTextInput
        data-testid="first-name-input"
        type="text"
        placeholder="First Name"
        {...register('firstName', registerFormRules.firstName)}
        errorMessage={formErrors.firstName?.message}
        onChange={getInputChangeHandler('firstName')}
      />
      <BaseTextInput
        data-testid="last-name-input"
        type="text"
        placeholder="Last Name"
        {...register('lastName', registerFormRules.lastName)}
        errorMessage={formErrors.lastName?.message}
        onChange={getInputChangeHandler('lastName')}
      />
      <BaseSelect
        data-testid="country-code-select"
        placeholder="Country"
        options={countrySelectionOptions}
        {...register('countryCode', registerFormRules.countryCode)}
        errorMessage={formErrors.countryCode?.message}
        onChange={countryCodeChangeHandler}
      />
      <div className="grid grid-cols-4 gap-4 md:gap-2">
        <BaseTextInput
          data-testid="phone-code-input"
          type="text"
          placeholder="Code"
          className="col-span-4 md:col-span-1"
          disabled
          {...register('phoneCode', registerFormRules.phoneCode)}
        />
        <BaseTextInput
          data-testid="phone-number-input"
          type="numeric"
          placeholder="Phone"
          className="col-span-4 md:col-span-3"
          {...register('phoneNumber', registerFormRules.phoneNumber)}
          errorMessage={formErrors.phoneNumber?.message}
          onChange={getInputChangeHandler('phoneNumber')}
        />
      </div>
      <BaseTextInput
        data-testid="email-input"
        type="email"
        placeholder="Email"
        {...register('email', registerFormRules.email)}
        errorMessage={formErrors.email?.message}
        onChange={getInputChangeHandler('email')}
      />
      <BaseSelect
        data-testid="experience-select"
        placeholder="Experience"
        options={experienceSelectionOptions}
        {...register('experience', registerFormRules.experience)}
        errorMessage={formErrors.experience?.message}
        onChange={experienceChangeHandler}
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
        {...register('conditionsAccepted', registerFormRules.conditionsAccepted)}
        errorMessage={formErrors.conditionsAccepted?.message}
        onChange={conditionsAcceptedChangeHandler}
      />
    </div>
  );
};

export default RegisterFormBody;
