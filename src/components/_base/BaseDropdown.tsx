import { ChevronDownIcon, Dropdown, DropdownItem, DropdownProps } from 'flowbite-react';
import { forwardRef, useMemo, useState } from 'react';
import BaseButton from './BaseButton';

export type BaseDropdownOption = {
  value: string;
  label: string;
};

export type BaseDropdownProps = Omit<DropdownProps, 'onChange'> & {
  options: BaseDropdownOption[];
  placeholder?: string;
  errorMessage?: string;
  onChange?: (value: string) => void;
};

const BaseDropdown = forwardRef<HTMLButtonElement, BaseDropdownProps>((props, ref) => {
  const { id, options, placeholder, errorMessage, className = '', onChange, ...otherProps } = props;
  const [value, setValue] = useState('');
  const baseClassName = 'w-full justify-between h-[42px] px-2.5 !text-base !rounded-md '
    + 'bg-white text-neutral-900 border border-neutral-400 hover:!bg-white focus:ring-primary-500';
  const classNameForPlaceholder = 'text-neutral-400';
  const classNameForError = '!bg-red-100 !border-red-400 hover:!bg-red-100 focus:!ring-1 focus:!ring-red-500';
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
            id={id}
            data-testid={props['data-testid']}
            className={`${baseClassName} ${errorMessage ? classNameForError : ''}`}
          >
            {displayedText? (
              <span className={`mr-2 ${!value ? classNameForPlaceholder : ''}`}>
                {displayedText}
              </span>
            ) : null}
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
        <div className="text-red-400 text-xs mt-1">
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
});

BaseDropdown.displayName = 'BaseDropdown';

export default BaseDropdown;
