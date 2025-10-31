import BaseTextInput from '@/components/_base/BaseTextInput/BaseTextInput';
import { ChangeEventHandler, FC, memo } from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';

export type LoginFormFieldValues = {
  username: string;
  password: string;
};

type LoginFormKeys = keyof LoginFormFieldValues;

type LoginFormRules = {
  [K in LoginFormKeys]?: RegisterOptions<LoginFormFieldValues, K>;
};

const loginFormRules: LoginFormRules = {
  username: {
    required: 'Username is required.',
  },
  password: {
    required: 'Password is required.',
  },
};

const LoginFormBody: FC = memo(() => {
  const { control, formState, setValue, clearErrors } = useFormContext<LoginFormFieldValues>();
  const formErrors = formState.errors;

  type InputChangeHandler = ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;

  const getInputChangeHandler = (key: LoginFormKeys): InputChangeHandler => {
    return (e) => {
      setValue(key, e.target.value);
      clearErrors(key);
    };
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <label htmlFor="username" className="min-w-[100px]">
          Username:
        </label>
        <Controller
          name="username"
          control={control}
          rules={loginFormRules.username}
          render={({ field }) => (
            <BaseTextInput
              id="username"
              data-testid="username-input"
              type="text"
              placeholder="Your email address"
              className="w-full"
              errorMessage={formErrors.username?.message}
              value={field.value}
              onBlur={field.onBlur}
              onChange={getInputChangeHandler('username')}
            />
          )}
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <label htmlFor="password" className="min-w-[100px]">
          Password:
        </label>
        <Controller
          name="password"
          control={control}
          rules={loginFormRules.password}
          render={({ field }) => (
            <BaseTextInput
              id="password"
              data-testid="password-input"
              type="password"
              placeholder="Your password"
              className="w-full"
              errorMessage={formErrors.password?.message}
              value={field.value}
              onBlur={field.onBlur}
              onChange={getInputChangeHandler('password')}
            />
          )}
        />
      </div>
    </div>
  );
});

export default LoginFormBody;
