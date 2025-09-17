import { FC, HTMLProps } from 'react';

const langConfig = { label: 'English', iconSrc: '/images/lang-en.svg' };

export type LangMenuProps = HTMLProps<HTMLAnchorElement>;

const LangMenu: FC<LangMenuProps> = (props) => {
  return (
    <a href='#' {...props} aria-label={langConfig.label}>
      <img src={langConfig.iconSrc} alt={langConfig.label} className="h-[17px]" />
    </a>
  );
};

export default LangMenu;
