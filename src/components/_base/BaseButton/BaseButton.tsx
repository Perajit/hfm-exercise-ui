import { Button, ButtonProps } from 'flowbite-react';
import { forwardRef } from 'react';

export type BaseButtonProps = ButtonProps;

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, buttonRef) => {
  const { size, className, ...otherProps } = props;

  return (
    <Button
      ref={buttonRef}
      theme={{
        base: 'rounded-sm focus:!ring-1 overflow-visible',
        color: {
          green: '!bg-[#179149] hover:!bg-[#097134]',
        },
        size: {
          base: '!rounded-0',
          xs: 'h-[24px] px-1 text-xs',
          sm: 'h-[29px] px-2 text-xs lg:!text-sm',
          md: 'h-[35px] px-6 text-sm lg:!text-md',
          lg: 'h-[54px] px-10 text-md lg:!text-lg !rounded-smd',
          xl: 'h-[63px] px-14 text-lg lg:!text-xl !rounded-smd',
        },
      }}
      size={size || 'md'}
      className={className}
      {...otherProps}
    />
  );
});

BaseButton.displayName = 'BaseButton';

export default BaseButton;
