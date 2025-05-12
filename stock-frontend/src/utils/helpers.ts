export function calculateAverage(numbers: number[]): number {
  if (!numbers.length) return 0;
  return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
}

export function calculateStandardDeviation(numbers: number[]): number {
  const avg = calculateAverage(numbers);
  const variance = numbers.reduce((acc, n) => acc + Math.pow(n - avg, 2), 0) / numbers.length;
  return Math.sqrt(variance);
}

export function pearsonCorrelation(x: number[], y: number[]): number {
  const avgX = calculateAverage(x);
  const avgY = calculateAverage(y);
  const numerator = x.reduce((sum, xi, i) => sum + (xi - avgX) * (y[i] - avgY), 0);
  const denominator = Math.sqrt(
    x.reduce((sum, xi) => sum + Math.pow(xi - avgX, 2), 0) *
    y.reduce((sum, yi) => sum + Math.pow(yi - avgY, 2), 0)
  );
  return denominator === 0 ? 0 : numerator / denominator;
}
