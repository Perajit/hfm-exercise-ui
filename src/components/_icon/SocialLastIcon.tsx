import { FC, SVGProps } from 'react';

const SocialLastIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  const { width, height, color = 'currentColor', className = '', ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 207 178"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...otherProps}
    >
      <g transform="translate(0,178) scale(0.1,-0.1)" fill={color} stroke="none">
        <path d="M20 890 l0 -870 1010 0 1010 0 0 65 0 65 -950 0 -950 0 0 805 0 805 -60 0 -60 0 0 -870z"/>
        <path d="M520 1385 l0 -65 510 0 510 0 0 65 0 65 -510 0 -510 0 0 -65z"/>
        <path d="M520 985 l0 -65 355 0 355 0 0 65 0 65 -355 0 -355 0 0 -65z"/>
        <path d="M520 585 l0 -65 610 0 610 0 0 65 0 65 -610 0 -610 0 0 -65z"/>
      </g>
    </svg>
  );
};

export default SocialLastIcon;
