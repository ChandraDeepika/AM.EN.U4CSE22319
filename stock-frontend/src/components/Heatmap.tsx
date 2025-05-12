import React from 'react';

type HeatmapProps = {
  data?: number[][];
};

export default function Heatmap({ data }: HeatmapProps) {
  const dummyData = data || [
    [1, 0.8, -0.5],
    [0.8, 1, -0.3],
    [-0.5, -0.3, 1],
  ];

  const getColor = (value: number) => {
    if (value > 0.75) return '#00f';
    if (value > 0.25) return '#77f';
    if (value > -0.25) return '#ccc';
    if (value > -0.75) return '#f77';
    return '#f00';
  };

  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>
        {dummyData.map((row, i) => (
          <tr key={i}>
            {row.map((value, j) => (
              <td
                key={j}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: getColor(value),
                  textAlign: 'center',
                  border: '1px solid #999',
                  color: '#000',
                }}
              >
                {value.toFixed(2)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
