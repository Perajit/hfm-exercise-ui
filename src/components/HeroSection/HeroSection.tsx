import BaseCard from '@/components/_base/BaseCard/BaseCard';
import BaseSection from '@/components/_base/BaseSection/BaseSection';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import { FC, HTMLProps } from 'react';

export type RegisterSectionProps = Omit<HTMLProps<HTMLBaseElement>, 'title'>;

const HeroSection: FC<RegisterSectionProps> = (props) => {
  const { className = '', ...otherProps } = props;
  const titleLineClassName = 'font-bold';

  const title = (
    <span className="inline-flex flex-col text-title leading-none lg:-mb-12">
      <span className={`${titleLineClassName} bg-gradient bg-clip-text text-transparent`}>LOREM IPSUM DOLOR</span>
      <span className={`${titleLineClassName} text-white`}>SIT AMET TOSIK</span>
    </span>
  );

  return (
    <BaseSection
      data-testid="hero-section"
      title={title}
      className={`bg-no-repeat bg-cover bg-center bg-[url(/images/hero-background.webp)] md:!py-12 lg:!py-20 ${className}`}
      {...otherProps}
    >
      <BaseCard className="max-w-[730px] mx-auto p-10">
        <RegisterForm title="Lorem ipsum dolor sit amet" />
      </BaseCard>
    </BaseSection>
  );
};

export default HeroSection;
