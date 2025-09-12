import BaseButton from '@/components/_base/BaseButton';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarTheme, NavbarToggle } from 'flowbite-react';
import type { FC, HTMLProps } from 'react';
import LangMenu from './LangMenu';

const loggImgSrc = '/images/logo.svg';
const downloadAppImgSrc = '/images/download-app.svg';

export type AppHeaderProps = Omit<HTMLProps<HTMLBaseElement>, 'title'>;

export const AppHeader: FC<AppHeaderProps> = (props) => {
  const { className, ...otherProps } = props;

  const logoTextClassName = 'text-tiny hidden lg:block mb-3';
  const logoClassName = 'h-[40px] md:h-auto';

  const navLinkClassName =
    'hover:!bg-transparent font-normal '
    + '!border-0 focus-visible:!outline-solid focus-visible:!outline-neutral-200 !py-1 !md:mx-0 '
    + '!text-dark-link hover:!text-neutral-400';

  const buttonClassName = 'border-1 rounded-sm text-md font-normal';
  const downloadAppButtonClassName =
    '!border-neutral-600 !bg-transparent hover:!bg-white hover:text-neutral-700 gap-2 '
    + buttonClassName;
  const loginButtonClassName = `!border-red-700 !bg-transparent hover:!bg-red-700 lg:!text-base ${buttonClassName}`;
  const registerButtonClassName = `border-transparent lg:!text-base ${buttonClassName}`;

  const classNameForBaseFontSize = 'text-sm lg:!text-base';
  const classNameForSmFontSize = 'text-xs lg:!text-sm';

  const outerNavbarTheme = {
    collapse: {
      list: 'items-center',
    },
    link: {
      base: `-mr-1 ${navLinkClassName} ${classNameForBaseFontSize}`,
    },
  } as NavbarTheme;

  const innerNavbarTheme = {
    collapse: {
      list: 'items-center',
    },
    link: {
      base: `${navLinkClassName} ${classNameForSmFontSize}`,
    },
  } as NavbarTheme;

  const innerNavItemSeparator = <div className="w-px h-4 bg-neutral-700 !-ml-4 !mr-4 my-auto" />;

  return (
    <header
      className={`bg-zinc-900 text-neutral-200 sticky top-0 z-50 ${className}`}
      {...otherProps}
    >
      <Navbar
        fluid
        theme={outerNavbarTheme}
        className="bg-inherit py-2 md:py-6 !px-8"
      >
        <div className="max-w-[1320px] flex flex-wrap justify-between md:gap-1 w-full mx-auto relative">
          <Navbar
            fluid
            theme={innerNavbarTheme}
            className="bg-transparent hidden md:flex absolute top-0 right-0 !px-0 !-my-6.5"
          >
            <NavbarCollapse>
              <NavbarLink href="#" className="flex items-center -mr-1">
                <BaseButton color="" size="sm" className={downloadAppButtonClassName}>
                  <img src={downloadAppImgSrc} alt="Download App" className="h-3 lg:h-3.5" />
                  Download App
                </BaseButton>
              </NavbarLink>
              <NavbarLink href="#">
                Contact us
              </NavbarLink>
              {innerNavItemSeparator}
              <NavbarLink href="#">
                Partner with us
              </NavbarLink>
              {innerNavItemSeparator}
              <LangMenu />
            </NavbarCollapse>
          </Navbar>
          <NavbarBrand href="/" className="block shrink-0 mr-4 md:mr-10 lg:mr-20">
            <small className={logoTextClassName}>
              Member of HF Market Group
            </small>
            <img src={loggImgSrc} alt="HFM" className={logoClassName} />
          </NavbarBrand>
          <div className="grow flex md:hidden justify-end items-center gap-4">
            <LangMenu className="md:hidden" />
            <NavbarToggle className="cursor-pointer hover:!bg-transparent" />
          </div>
          <NavbarCollapse className="grow self-end md:justify-end md:justify-between md:gap-0 mt-2 md:mt-6">
            <div className="grow flex flex-col md:flex-row gap-4 lg:gap-10">
              <NavbarLink href="#">
                Markets
              </NavbarLink>
              <NavbarLink href="#">
                Trading
              </NavbarLink>
              <NavbarLink href="#">
                Investing
              </NavbarLink>
              <NavbarLink href="#">
                Tools & Education
              </NavbarLink>
              <NavbarLink href="#">
                Company
              </NavbarLink>
            </div>
            <div className="flex gap-4 px-2 md:px-0 py-4 md:py-0 md:self-end">
              <BaseButton size="md" className={loginButtonClassName}>
                Login
              </BaseButton>
              <BaseButton size="md" color="green" className={registerButtonClassName}>
                Register
              </BaseButton>
            </div>
          </NavbarCollapse>
        </div>
      </Navbar>
    </header>
  );
};
