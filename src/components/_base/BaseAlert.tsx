import { Alert, AlertProps } from 'flowbite-react';
import { DynamicStringEnumKeysOf, FlowbiteColors } from 'flowbite-react/types';
import { FC, SVGProps } from 'react';
import { LuCircleAlert, LuCircleCheck, LuCircleX, LuInfo } from 'react-icons/lu';

const iconsByColor: Partial<Record<DynamicStringEnumKeysOf<FlowbiteColors>, FC<SVGProps<SVGSVGElement>>>> = {
  info: LuInfo,
  warning: LuCircleAlert,
  failure: LuCircleX,
  success: LuCircleCheck,
};

type BaseAlertProps = AlertProps & {
  withDefaultIcon?: boolean;
};

const BaseAlert: FC<BaseAlertProps> = (props) => {
  const { children, color = 'info', withDefaultIcon = false, icon, ...otherProps } = props;
  const defaultIcon = withDefaultIcon ? iconsByColor[color] : undefined;

  return (
    <Alert
      color={color}
      theme={{
        base: 'text-sm',
        wrapper: '!text-base font-bold',
        closeButton: {
          base: 'cursor-pointer self-baseline',
        },
      }}
      icon={icon ?? defaultIcon}
      {...otherProps}
    >
      <div className="flex gap-4">
        {children}
      </div>
    </Alert>
  );
};

export default BaseAlert;
