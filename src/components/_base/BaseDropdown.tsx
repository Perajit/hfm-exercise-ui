import { ChevronDownIcon, Dropdown, DropdownItem, DropdownProps } from 'flowbite-react';
import { forwardRef, useMemo, useState } from 'react';
import BaseButton from './BaseButton';

export type SelectionOption = {
  value: string;
  label: string;
};

export type BaseDropdownProps = Omit<DropdownProps, 'onChange'> & {
  options: SelectionOption[];
  placeholder?: string;
  errorMessage?: string;
  onChange?: (value: string) => void;
};

const BaseDropdown = forwardRef<HTMLButtonElement, BaseDropdownProps>((props, ref) => {
  const { options, placeholder, errorMessage, className = '', onChange, ...otherProps } = props;
  const [value, setValue] = useState('');
  const baseClassName = 'w-full justify-between h-[42px] px-2.5 !text-base '
    + 'bg-transparent hover:!bg-transparent text-neutral-900 '
    + 'border border-neutral-400 ';
  const classNameForPlaceholder = !value ? 'text-neutral-400' : '';
  const classNameForError = errorMessage ? '!border-red-400 focus:!ring-1 focus:!ring-red-500' : '';
  const displayedText = useMemo(() => {
    const selectedOption = options.find(option => option.value === value);
    return selectedOption? selectedOption.label : placeholder;
  }, [options, value, placeholder]);

  return (
    <div className={className}>
      <Dropdown
        ref={ref}
        renderTrigger={() => (
          <BaseButton
            data-testid={props['data-testid']}
            className={`${baseClassName} ${classNameForError}`}
          >
            <span className={classNameForPlaceholder}>{displayedText}</span>
            <ChevronDownIcon width={24} height={24} className="text-neutral-400 -mx-1" />
          </BaseButton>
        )}
        theme={{
          content: '!text-red-500',
          inlineWrapper: 'text-red-500',
        }}
        {...otherProps}
      >
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            value={option.value}
            onClick={() => {
              setValue(option.value);
              onChange?.(option.value);
            }}
          >
            {option.label}
          </DropdownItem>
        ))}
      </Dropdown>
      {errorMessage ? (
        <div className="text-red-400 text-xs mt-1">{errorMessage}</div>
      ) : null}
    </div>
  );
});

BaseDropdown.displayName = 'BaseDropdown';

export default BaseDropdown;
