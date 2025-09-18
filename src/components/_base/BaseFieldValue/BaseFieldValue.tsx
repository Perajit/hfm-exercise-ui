import { FC, ReactNode } from 'react';

export type BaseFieldValueProps = {
  field: string;
  value: ReactNode;
  className?: string;
  fieldClassName?: string;
  valueClassName?: string;
};

const BaseFieldValue: FC<BaseFieldValueProps> = (props) => {
  const { field, value, className = '', fieldClassName = '', valueClassName = '' } = props;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-2 ${className}`}>
      <div className={`text-muted ${fieldClassName}`}>
        {field}:
      </div>
      <div className={valueClassName}>
        {value}
      </div>
    </div>
  );
};

export default BaseFieldValue;
