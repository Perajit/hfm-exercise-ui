import BaseButton from '@/components/_base/BaseButton/BaseButton';
import BaseCard from '@/components/_base/BaseCard/BaseCard';
import BaseSection from '@/components/_base/BaseSection/BaseSection';
import { FC, HTMLProps } from 'react';

const medalImgSrcs = [
  '/images/medal-1.svg',
  '/images/medal-2.svg',
  '/images/medal-3.svg',
];

type Prize = {
  id: number;
  name: string;
  amount: number;
};

const prizeList: Prize[] = [
  { id: 1, name: 'Cras dapibus & Cras dapibus', amount: 1000 },
  { id: 2, name: 'Cras dapibus', amount: 1000 },
  { id: 3, name: 'Cras dapibus', amount: 1000 },
];

export type PrizesSectionProps = Omit<HTMLProps<HTMLBaseElement>, 'title'>;

const PrizesSection: FC<PrizesSectionProps> = (props) => {
  const title = 'PRIZES';

  return (
    <BaseSection
      data-testid="prizes-section"
      title={title}
      {...props}
    >
      <div role="list" className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mb-12 lg:mb-24">
        {prizeList.map((prize, index) => (
          <BaseCard
            key={prize.id}
            color="gray"
            role="listitem"
            className="flex flex-col items-center gap-4 p-12 text-center text-black"
          >
            <img src={medalImgSrcs[index]} className="w-[100px]'" />
            <div className="text-heading-1 font-bold">
              ${prize.amount}
            </div>
            <div className="uppercase mt-4">
              {prize.name}
            </div>
          </BaseCard>
        ))}
      </div>
      <div className="text-center -mb-12">
        <BaseButton color="green" size="lg" className="w-[307px] max-w-full mx-auto">
          JOIN NOW
        </BaseButton>
        <div className="text-xs text-muted mt-2">
          Terms and Conditions apply
        </div>
      </div>
    </BaseSection>
  );
};

export default PrizesSection;
