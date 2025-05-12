import { useEffect, useState } from 'react';
import { getStocks, getStockPrice, authenticate } from '../services/api';
import StockChart from '../components/StockChart';

export default function StockPage() {
  const [stocks, setStocks] = useState<{ [key: string]: string }>({});
  const [selected, setSelected] = useState('');
  const [minutes, setMinutes] = useState(30);
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    (async () => {
      await authenticate();
      const stockList = await getStocks();
      setStocks(stockList);
    })();
  }, []);

  const fetchPrice = async () => {
    if (selected) {
      const data = await getStockPrice(selected, minutes);
      setPriceData(data);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Stock Price Viewer</h2>
      <select onChange={e => setSelected(e.target.value)} value={selected}>
        <option value="">Select Stock</option>
        {Object.entries(stocks).map(([name, code]) => (
          <option key={code} value={code}>{name}</option>
        ))}
      </select>
      <input
        type="number"
        min={1}
        value={minutes}
        onChange={e => setMinutes(+e.target.value)}
        style={{ marginLeft: '1rem' }}
      />
      <button onClick={fetchPrice} style={{ marginLeft: '1rem' }}>Load</button>

      {priceData.length > 0 && <StockChart data={priceData} />}
    </div>
  );
}