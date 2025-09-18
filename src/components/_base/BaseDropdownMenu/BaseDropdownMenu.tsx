import { Dropdown, DropdownDivider, DropdownItem, DropdownProps } from 'flowbite-react';
import { FC, ReactElement, ReactNode, useMemo } from 'react';

const itemLevelToClassNameMap = new Map([
  [0, 'pl-4 pr-4'],
  [1, 'pl-8 pr-4'],
  [2, 'pl-12 pr-4'],
  [3, 'pl-16 pr-4'],
]);

export type BaseDropdownMenuItem = {
  key: string;
  asDivider?: boolean;
  content?: ReactNode;
  children?: BaseDropdownMenuItem[];
  linkTo?: string;
  onClick?: () => void;
};

export type BaseDropdownMenuProps = Omit<DropdownProps, 'renderTrigger'> & {
  renderTrigger: NonNullable<DropdownProps['renderTrigger']>;
  items: BaseDropdownMenuItem[];
};

const BaseDropdownMenu: FC<BaseDropdownMenuProps> = (props) => {
  const { items, className = '', ...otherProps } = props;

  const renderItem = (item: BaseDropdownMenuItem, level: number): ReactElement => {
    const { key, asDivider, content, children = [], linkTo, onClick } = item;
    const baseClassName = itemLevelToClassNameMap.get(level) ?? '';

    return asDivider? (
      <DropdownDivider key={key} />
    ) : (
      <>
        <DropdownItem
          key={key}
          as={linkTo ? 'a' : onClick ? 'button' : 'div'}
          href={linkTo}
          theme={{
            base: `${baseClassName} ${linkTo || onClick ? 'cursor-pointer' : 'cursor-default'}`,
          }}
          onClick={onClick}
        >
          {content}
        </DropdownItem>
        {children?.length > 0 ? (
          children.map((childItem) => renderItem(childItem, level + 1))
        ) : null}
      </>
    );
  };

  const renderedItems = useMemo(() => {
    return items.map((option) => renderItem(option, 0));
  }, [items]);

  return (
    <div>
      <Dropdown
        theme={{
          floating: {
            base: 'w-max min-w-full',
          },
        }}
        className={className}
        {...otherProps}
      >
        {renderedItems}
      </Dropdown>
    </div>
  );
};

export default BaseDropdownMenu;
