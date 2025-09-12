import { Checkbox, CheckboxProps, Label } from 'flowbite-react';
import { forwardRef, ReactNode } from 'react';

export type BaseCheckboxProps = CheckboxProps & {
  label?: ReactNode;
  errorMessage?: string;
};

const BaseCheckbox = forwardRef<HTMLInputElement, BaseCheckboxProps>((props, ref) => {
  const { id, label, errorMessage, className = '', ...otherProps } = props;
  const baseClassName = 'shrink-0 !bg-transparent checked:!bg-current !border-neutral-400 rounded-xs';
  const classNameForError = '!bg-red-100 !border-red-400 focus:!ring-1 focus:!ring-red-500';

  return (
    <div className={className}>
      <div className="flex item-center gap-2">
        <Checkbox
          ref={ref}
          id={id}
          className={`${baseClassName} ${errorMessage ? classNameForError : ''}`}
          {...otherProps}
        />
        {label ? (
          <Label htmlFor={id} className="cursor-pointer -mt-0.5">
            {label}
          </Label>
        ) : null}
      </div>
      {errorMessage ? (
        <div className="text-red-400 text-xs mt-1">
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
});

BaseCheckbox.displayName = 'BaseCheckbox';

export default BaseCheckbox;
