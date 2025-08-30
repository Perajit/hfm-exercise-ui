import { FC, HTMLProps, PropsWithChildren } from 'react';

type BaseCardProps = HTMLProps<HTMLDivElement> & PropsWithChildren & {
  gray?: boolean;
};

const BaseCard: FC<BaseCardProps> = (props) => {
  const { gray = false, children, className = '', ...otherProps } = props;

  return (
    <div className={`rounded rounded-xl ${gray ? 'bg-[#f4f4f4]' : 'bg-white'} ${className}`} {...otherProps}>
      {children}
    </div>
  );
};

export default BaseCard;
