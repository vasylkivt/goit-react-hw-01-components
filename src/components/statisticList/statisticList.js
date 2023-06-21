import StatisticItem from 'components/statisticItem/statisticItem';

export default function StatisticList({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(({ id, percentage, label }) => (
          <li className="item" key={id}>
            <StatisticItem percentage={percentage} label={label} />
          </li>
        ))}
      </ul>
    </section>
  );
}
