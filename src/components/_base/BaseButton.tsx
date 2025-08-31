import { Button, ButtonProps } from 'flowbite-react';
import { forwardRef } from 'react';

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>((props, buttonRef) => {
  const { className, ...otherProps } = props;

  return (
    <Button
      ref={buttonRef}
      theme={{
        color: {
          green: '!bg-[#179149] hover:!bg-[#097134]',
        },
        size: {
          xs: 'h-[29px] px-2',
          sm: 'h-[35px] px-6 text-sm lg:!text-base',
          md: 'h-[54px] text-lg',
        },
      }}
      className={`max-w-full !rounded-md focus:!ring-1 ${className}`}
      {...otherProps}
    />
  );
});

BaseButton.displayName = 'BaseButton';

export default BaseButton;
