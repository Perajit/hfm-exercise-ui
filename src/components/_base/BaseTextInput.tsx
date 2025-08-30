import { TextInput, TextInputProps } from 'flowbite-react';
import { forwardRef } from 'react';

export type BaseTextInputProps = TextInputProps & {
  errorMessage?: string;
};

const BaseTextInput = forwardRef<HTMLInputElement, BaseTextInputProps>((props, ref) => {
  const { errorMessage, className = '', ...otherProps } = props;
  const baseClassName = '!bg-transparent !border-neutral-400 h-[42px] !text-[16px] leading-none !rounded-md';
  const classNameForPlaceholder = 'placeholder:text-neutral-400';
  const classNameForError = errorMessage ? '!border-red-400 focus:!ring-1 focus:!ring-red-500' : '';

  return (
    <div className={className}>
      <TextInput
        ref={ref}
        theme={{
          field: {
            input: {
              base: `${baseClassName} ${classNameForPlaceholder} ${classNameForError}`,
            },
          },
        }}
        {...otherProps}
      />
      {errorMessage ? (
        <div className="text-red-400 text-xs mt-1">{errorMessage}</div>
      ) : null}
    </div>
  );
});

BaseTextInput.displayName = 'BaseTextInput';

export default BaseTextInput;
