interface StocksAndOptions {
  id: number;
  name: string;
  value: number;
  change: number;
}

type Props = {
  label: string;
  buttonLabel: string;
  data: StocksAndOptions[];
  loading?: boolean;
};

const Table = ({ buttonLabel, data, label, loading }: Props) => {
  return (
    <div className="rounded-lg bg-white">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{label}</h2>
        <button className="rounded bg-violet-500 px-4 py-1 font-bold text-white hover:bg-violet-700">{buttonLabel}</button>
      </div>
      {loading ? (
        <div className="flex size-full items-center justify-center">
          <p className="text-xl">Loading data...</p>
        </div>
      ) : (
        <ul className="divide-gray-200">
          {data.map((stock, index) => (
            <li key={index} className="flex items-center border-t py-4 last-of-type:border-b">
              <span className="grow">{stock.name}</span>
              <span className="rounded bg-gray-200 px-2 font-bold">${stock.value}</span>
              <span className={`ml-2 w-[48px] text-right text-sm ${stock.change < 0 ? "text-red-500" : "text-green-500"}`}>{stock.change}%</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Table;
