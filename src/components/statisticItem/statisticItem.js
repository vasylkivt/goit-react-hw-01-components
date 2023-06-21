export default function StatisticItem({ percentage, label }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
}
