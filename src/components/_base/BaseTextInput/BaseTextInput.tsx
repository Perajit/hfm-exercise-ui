import { TextInput, TextInputProps } from 'flowbite-react';
import { FC, Ref } from 'react';

export type BaseTextInputProps = Omit<TextInputProps, 'sizing'> & {
  ref?: Ref<HTMLInputElement>;
  size?: TextInputProps['sizing'];
  errorMessage?: string;
};

const BaseTextInput: FC<BaseTextInputProps> = (props) => {
  const { ref, color, size, errorMessage, className = '', ...otherProps } = props;
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
};

export default BaseTextInput;
