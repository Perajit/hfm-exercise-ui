import BaseSection from '@/components/_base/BaseSection';
import { FC, HTMLProps } from 'react';

const intro1ImgSrc = '/images/intro-1.svg';
const intro2ImgSrc = '/images/intro-2.svg';
const intro3ImgSrc = '/images/intro-3.svg';
const appImgSrc = '/images/app.svg';

export type IntroSectionProps = Omit<HTMLProps<HTMLBaseElement>, 'title'>;

const IntroSection: FC<IntroSectionProps> = (props) => {
  const { className = '', ...otherProps } = props;
  const gridClassName = 'max-w-[1100px] mx-auto lg:-mt-4 px-4 '
    + 'flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center items-center lg:items-stretch gap-4 md:gap-4 lg:gap-8';
  const colClassName = 'max-w-[500px] md:max-w-[300px] lg:max-w-[200px] mx-auto mb-10 md:px-6 lg:px-0 lg:-mt-4 lg:pb-40 '
    + 'flex flex-col lg:mb-0 gap-12 lg:gap-12 lg:justify-between md:translate-x-0 '
    + 'text-center md:text-start';
  const appClassName = 'lg:shrink-0 flex items-end mx-auto -translate-x-3';
  const iconClassName = 'h-[60px] md:h-[80px] lg:h-[100px] mx-auto md:mx-0 mb-4';
  const textClassName = 'lg:text-base';

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
