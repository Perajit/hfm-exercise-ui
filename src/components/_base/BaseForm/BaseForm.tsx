import BaseButton, { BaseButtonProps } from '@/components/_base/BaseButton/BaseButton';
import { Spinner } from 'flowbite-react';
import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { DefaultValues, FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

export type BaseFormProps<V extends FieldValues> = PropsWithChildren & {
  title: ReactNode;
  withResetButton?: boolean;
  submitButtonText?: ReactNode;
  submitButtonProps?: BaseButtonProps;
  resetButtonText?: ReactNode;
  resetButtonProps?: BaseButtonProps;
  className?: string;
  defaultValues?: DefaultValues<V>;
  submitHandler: SubmitHandler<V>;
  submissionIsPending?: boolean;
};

const BaseForm = <V extends FieldValues>(props: BaseFormProps<V>): ReactElement | null => {
  const {
    children,
    title,
    withResetButton,
    submitButtonText,
    submitButtonProps,
    resetButtonText,
    resetButtonProps,
    className,
    defaultValues,
    submitHandler,
    submissionIsPending,
  } = props;

  const useFormResult = useForm<V>({
    defaultValues,
    shouldFocusError: false,
    reValidateMode: 'onBlur',
  });

  return (
    <FormProvider {...useFormResult}>
      <form className={className} onSubmit={useFormResult.handleSubmit(submitHandler)}>
        <h2 className="text-2xl text-center font-bold mb-8">
          {title}
        </h2>
        {children}
        <div className="flex justify-center gap-4 mt-10">
          <BaseButton
            data-testid="submit-button"
            type="submit"
            color="green"
            size="lg"
            {...submitButtonProps}
            disabled={submissionIsPending}
          >
            {submissionIsPending ? (
              <Spinner aria-label="Submitting request." />
            ) : submitButtonText}
          </BaseButton>
          {withResetButton ? (
            <BaseButton
              data-testid="submit-button"
              type="button"
              color="light"
              size="lg"
              {...resetButtonProps}
            >
              {resetButtonText}
            </BaseButton>
          ) : null}
        </div>
      </form>
    </FormProvider>
  );
};

export default BaseForm;
