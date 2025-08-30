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
      }}
      className={`max-w-full !rounded-md focus:!ring-1 ${className}`}
      {...otherProps}
    />
  );
});

BaseButton.displayName = 'BaseButton';

export default BaseButton;
