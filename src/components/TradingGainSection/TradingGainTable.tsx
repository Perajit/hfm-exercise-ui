import { TradingGain } from '@/types/trading.model';
import { FC } from 'react';

type TradingGainTableProps = {
  list: TradingGain[];
};

const TradingGainTable: FC<TradingGainTableProps> = (props) => {
  const { list } = props;
  const tableCellClassName = 'px-4 py-3.5 border-b border-gray-200';
  const tableHeadCellClassName = `${tableCellClassName} text-left text-red-700`;
  const tableBodyCellClassName = `${tableCellClassName} text-[#161616]`;

  return (
    <div className="flex-1">
      <h2 className="font-bold text-[25px] mb-8">
        ALIQUAM LOREM ANT
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className={tableHeadCellClassName}>NAME</th>
            <th className={tableHeadCellClassName}>GAIN</th>
          </tr>
        </thead>
        <tbody>
          {list.map((tradingGain) => (
            <tr key={tradingGain.id}>
              <td className={`${tableBodyCellClassName} w-full`}>{tradingGain.traderName}</td>
              <td className={`${tableBodyCellClassName} font-bold`}>{tradingGain.percentGain}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-xs text-neutral-400 mt-6">
        Nam quam nunc, blandit vel, luctus pulvinar
      </div>
    </div>
  );
};

export default TradingGainTable;
