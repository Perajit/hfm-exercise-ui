import BaseDropdownMenu, { BaseDropdownMenuItem } from '@/components/_base/BaseDropdownMenu/BaseDropdownMenu';
import { useAuthContext } from '@/context/AuthContext';
import { useAuthLogout } from '@/hooks/useAuthLogout';
import { NavbarLink } from 'flowbite-react';
import { FC } from 'react';
import { LuArrowUpFromLine, LuCircleUserRound, LuUserRound, LuUserRoundCog } from 'react-icons/lu';

export type UserControlsProps = {
  className?: string;
  onLogoutSuccess?: () => void;
  onLogoutError?: (error: Error) => void;
};

const UserControls: FC<UserControlsProps> = (props) => {
  const { className = '' } = props;
  const { isAuthenticated } = useAuthContext();
  const { mutate: logout } = useAuthLogout();

  const classNameForBaseFontSize = 'text-sm lg:!text-base';
  const containerClassName = `${'px-2 py-4 mt-4 md:px-0 md:py-0 md:mt-0'} ${classNameForBaseFontSize}`;

  const unauthenticatedLinkClassName = 'cursor-pointer md:cursor-default '
    + 'font-normal text-md lg:!text-base md:hover:!text-white '
    + 'inline-block rounded-sm md:flex md:items-center '
    + 'w-full md:w-auto md:!h-[35px] md:px-6';
  const loginLinkClassName = 'md:!border md:border-red-700 md:hover:!bg-red-700 '
    + unauthenticatedLinkClassName;
  const registerLinkClassName = 'md:!border md:border-transparent md:bg-[#179149] md:hover:!bg-[#097134] '
    + unauthenticatedLinkClassName;

  const userMenuItemClassName = 'flex gap-2 justify-start items-center';

  const userMenuItems: BaseDropdownMenuItem[] = [
    {
      key: 'my-page',
      content: (
        <div className={userMenuItemClassName}>
          <LuUserRound size={18} />
          <span>My Dashboard</span>
        </div>
      ),
    },
    {
      key: 'my-profile',
      content: (
        <div className={userMenuItemClassName}>
          <LuUserRoundCog size={18} />
          <span>My Profile</span>
        </div>
      ),
      linkTo: '/my-profile',
    },
    {
      key: 'separator-1',
      asDivider: true,
    },
    {
      key: 'logout',
      content: (
        <div className={userMenuItemClassName}>
          <LuArrowUpFromLine size={18} />
          <span>Logout</span>
        </div>
      ),
      onClick: logout as BaseDropdownMenuItem['onClick'],
    },
  ];

  return (
    <div className={`${containerClassName} ${className}`}>
      {isAuthenticated ? (
        <>
          <BaseDropdownMenu
            renderTrigger={() => (
              <LuCircleUserRound size={20} className="cursor-pointer hidden md:block" />
            )}
            items={userMenuItems}
          />
          <ul className="md:hidden">
            {userMenuItems.map((item) => {
              return !item.asDivider ? (
                <NavbarLink
                  key={item.key}
                  theme={{
                    base: 'block px-1 !py-3',
                  }}
                  href={item.linkTo}
                  onClick={item.onClick}
                >
                  {item.content}
                </NavbarLink>
              ) : null;
            })}
          </ul>
        </>
      ) : (
        <div className="flex flex-col items-stretch gap-5 md:flex-row md:mr-[4px]">
          <NavbarLink href="/login" className={loginLinkClassName}>
            Login
          </NavbarLink>
          <NavbarLink href="/register" className={registerLinkClassName}>
            Register
          </NavbarLink>
        </div>
      )}
    </div>
  );
};

export default UserControls;
