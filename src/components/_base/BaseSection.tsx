import { FC, HTMLProps, PropsWithChildren, ReactNode } from 'react';

export type BaseSectionProps = Omit<HTMLProps<HTMLBaseElement>, 'title'> & PropsWithChildren & {
  title: ReactNode;
};

const BaseSection: FC<BaseSectionProps> = (props) => {
  const { title, children, className = '', ...otherProps } = props;

  return (
    <section className={`px-8 py-16 md:py-24 lg:py-30 ${className}`} {...otherProps}>
      <div className="container max-w-[1320px] mx-auto">
        <h1 className="text-black font-[SofiaSansCondensed] leading-none text-heading-1 text-center mb-12 lg:mb-22">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
};

export default BaseSection;
