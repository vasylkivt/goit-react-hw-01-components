import StatisticItem from 'components/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

export default function StatisticList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(({ id, percentage, label }) => (
        <li className="item" key={id}>
          <StatisticItem percentage={percentage} label={label} />
        </li>
      ))}
    </ul>
  );
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
