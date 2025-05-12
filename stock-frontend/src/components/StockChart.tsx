import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

type Props = {
  data: { price: number; lastUpdatedAt: string }[];
};

export default function StockChart({ data }: Props) {
  const average =
    data.reduce((sum, d) => sum + d.price, 0) / data.length;

  const avgData = data.map((d) => ({ ...d, avg: average }));

  return (
    <div style={{ marginTop: '2rem' }}>
      <LineChart width={800} height={400} data={avgData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="lastUpdatedAt" tick={{ fontSize: 10 }} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <Line type="monotone" dataKey="avg" stroke="#ff0000" dot={false} />
      </LineChart>
      <p style={{ fontWeight: 'bold' }}>Average Price: {average.toFixed(2)}</p>
    </div>
  );
}