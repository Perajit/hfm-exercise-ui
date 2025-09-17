import BaseButton from '@/components/_base/BaseButton/BaseButton';
import BaseSection from '@/components/_base/BaseSection/BaseSection';
import { TradingGain } from '@/types/trading.type';
import { FC, HTMLProps } from 'react';
import TradingGainTable from './TradingGainTable';
import MonthyTradingGainWinners from './TradingGainWinners';

const winnerList: TradingGain[] = [
  { id: 1, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 16344, ofMonth: 'January' },
  { id: 2, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 16344, ofMonth: 'January' },
  { id: 3, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 16344, ofMonth: 'January' },
];

const nonWinnerList: TradingGain[] = [
  { id: 4, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 1624.19, ofMonth: 'January' },
  { id: 5, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 1083.63, ofMonth: 'January' },
  { id: 6, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 635.7, ofMonth: 'January' },
  { id: 7, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 169.2, ofMonth: 'January' },
  { id: 8, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 158.62, ofMonth: 'January' },
  { id: 9, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 124.5, ofMonth: 'January' },
  { id: 10, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 71.47, ofMonth: 'January' },
  { id: 11, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 67.05, ofMonth: 'January' },
  { id: 12, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 62.30, ofMonth: 'January' },
  { id: 13, traderName: 'JOHN SMITH', traderCode: '5678987654', percentGain: 61.74, ofMonth: 'January' },
];

export type TradingGainSectionProps = Omit<HTMLProps<HTMLBaseElement>, 'title'>;

const TradingGainSection: FC<TradingGainSectionProps> = (props) => {
  const title = 'SED FRINGILLA MAURIS SI';

  return (
    <BaseSection
      data-testid="trading-gain-section"
      title={title}
      {...props}
    >
      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-16 mb-12 lg:mb-20">
        <MonthyTradingGainWinners list={winnerList} />
        <TradingGainTable list={nonWinnerList} />
      </div>
      <div className="text-center">
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

export default TradingGainSection;
