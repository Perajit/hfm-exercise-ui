import BaseSection from '@/components/_base/BaseSection';
import { FC, HTMLProps } from 'react';

const intro1ImgSrc = '/images/intro-1.svg';
const intro2ImgSrc = '/images/intro-2.svg';
const intro3ImgSrc = '/images/intro-3.svg';
const appImgSrc = '/images/app.svg';

export type IntroSectionProps = Omit<HTMLProps<HTMLBaseElement>, 'title'>;

const IntroSection: FC<IntroSectionProps> = (props) => {
  const { className = '', ...otherProps } = props;
  const gridClassName = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-flow-row md:gap-10 lg:mx-8';
  const colClassName = 'col-span-1 md:col-span-1 lg:col-span-1 md:text-start flex flex-col text-center mb-10 lg:mb-0 gap-10 lg:gap-20 md:translate-x-4';
  const appClassName = 'col-span-1 row-span-2 md:col-span-2 lg:col-span-2 flex items-end mx-auto -translate-x-1';
  const iconClassName = 'h-[60px] md:h-[80px] lg:h-[100px] mx-auto mb-1 md:mx-0 lg:mb-4';
  const textClassName = 'lg:text-[16px] text-[#161616]';

  const title = 'QUISQUE RUTRUM';

  return (
    <BaseSection
      data-testid="intro-section"
      title={title}
      className={`!pb-0 ${className}`}
      {...otherProps}
    >
      <div className={gridClassName}>
        <div className={colClassName}>
          <div>
            <img src={intro1ImgSrc} className={iconClassName} />
            <span className={textClassName}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
          </div>
          <div>
            <img src={intro2ImgSrc} className={iconClassName} />
            <span className={textClassName}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
          </div>
        </div>
        <div className={`${colClassName} lg:order-2`}>
          <div>
            <img src={intro3ImgSrc} className={iconClassName} />
            <span className={textClassName}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
          </div>
          <div>
            <img src={intro1ImgSrc} className={iconClassName} />
            <span className={textClassName}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
          </div>
        </div>
        <div className={appClassName}>
          <img src={appImgSrc} />
        </div>
      </div>
    </BaseSection>
  );
};

export default IntroSection;
