import { FC, HTMLProps, PropsWithChildren } from 'react';

type BaseCardColor = 'white' | 'gray';

const classNameByColor: Record<BaseCardColor, string> = {
  white: 'bg-white',
  gray: 'bg-[#f4f4f4]',
};

export type BaseCardProps = HTMLProps<HTMLDivElement> & PropsWithChildren & {
  color?: BaseCardColor;
};

const BaseCard: FC<BaseCardProps> = (props) => {
  const { color = 'white', children, className = '', ...otherProps } = props;
  const classNameForColor = classNameByColor[color];

  return (
    <div className={`rounded rounded-xl p-8 ${classNameForColor} ${className}`} {...otherProps}>
      {children}
    </div>
  );
};

export default BaseCard;
