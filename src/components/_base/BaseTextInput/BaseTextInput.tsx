import { TextInput, TextInputProps } from 'flowbite-react';
import { forwardRef } from 'react';

export type BaseTextInputProps = Omit<TextInputProps, 'sizing'> & {
  size?: TextInputProps['sizing'];
  errorMessage?: string;
};

const BaseTextInput = forwardRef<HTMLInputElement, BaseTextInputProps>((props, ref) => {
  const { color, size, errorMessage, className = '', ...otherProps } = props;
  const baseClassName = '!bg-white !border-neutral-400';
  const classNameForPlaceholder = 'placeholder:text-neutral-400';
  const classNameForError = '!bg-red-100 !border-red-400 focus:!ring-red-500';

  return (
    <div className={className}>
      <TextInput
        ref={ref}
        theme={{
          field: {
            input: {
              base: `${baseClassName} ${classNameForPlaceholder}`,
              colors: {
                failure: classNameForError,
              },
              sizes: {
                sm: '!rounded-sm',
                md: 'h-[42px] !text-base !rounded-md',
              },
            },
          },
        }}
        sizing={size}
        color={errorMessage ? 'failure' : color}
        {...otherProps}
      />
      {errorMessage ? (
        <div className="text-red-400 text-xs mt-1">
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
});

BaseTextInput.displayName = 'BaseTextInput';

export default BaseTextInput;
