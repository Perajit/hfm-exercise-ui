import BaseCard from '@/components/_base/BaseCard';
import { TradingGain } from '@/types/trading.model';
import { FC } from 'react';

type CardConfig = {
  iconSrc: string;
  nthSup: string;
  rewardAmount: number;
  rewardUnit: string;
};

const cardConfigs: CardConfig[] = [
  { iconSrc: '/images/trophy-1.svg', nthSup: 'st', rewardAmount: 1000, rewardUnit: '$' },
  { iconSrc: '/images/trophy-2.svg', nthSup: 'nd', rewardAmount: 1000, rewardUnit: '$' },
  { iconSrc: '/images/trophy-3.svg', nthSup: 'rd', rewardAmount: 1000, rewardUnit: '$' },
];

type MonthyTradingGainWinnersProps = {
  list: TradingGain[];
};

const MonthyTradingGainWinners: FC<MonthyTradingGainWinnersProps> = (props) => {
  const { list } = props;

  return (
    <div
      role="list"
      className="flex flex-col gap-6"
    >
      {cardConfigs.map((cardConfig, index) => {
        const tradingGain = list[index];

        return tradingGain ? (
          <BaseCard
            key={tradingGain.id}
            className="flex flex-col md:flex-row items-center gap-6 p-8 overflow-hidden relative uppercase text-lg"
          >
            <img src={cardConfig.iconSrc} alt="" className="w-[100px]" />
            <div>
              <h3 className="bg-gradient bg-clip-text text-transparent font-bold">
                {tradingGain.ofMonth}&nbsp;
                <span className="whitespace-nowrap">
                  {index + 1}
                  <sup className="lowercase text-xs text-[var(--gradient-via-color)] inline-block">
                    {cardConfig.nthSup}
                  </sup>&nbsp;
                </span>
                Winner
              </h3>
              <div className="my-5">
                <div className="">{tradingGain.traderName}</div>
                <div className="text-neutral-400">{tradingGain.traderCode}</div>
              </div>
              <div className="font-bold">
                Total gain of <span className="text-red-700">{tradingGain.percentGain}%</span>
              </div>
            </div>
            <div className="w-[100px] hidden md:block">
            </div>
            <div
              className={
                'bg-gradient w-[200px] h-[43px] rotate-45 absolute top-[20px] -right-[60px] ' +
                'text-white font-bold text-2xl flex justify-center items-center'
              }
            >
              ${cardConfig.rewardAmount}
            </div>
          </BaseCard>
        ) : null;
      })}
    </div>
  );
};

export default MonthyTradingGainWinners;
