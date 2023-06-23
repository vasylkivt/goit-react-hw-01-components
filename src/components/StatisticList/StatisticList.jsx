import StatisticItem from 'components/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';
import css from './StatisticList.module.css';

export default function StatisticList({ stats }) {
  return (
    <ul className={css['stat-list']}>
      {stats.map(({ id, percentage, label }) => (
        <li
          style={{ backgroundColor: getRandomHexColor() }}
          className={css.item}
          key={id}
        >
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
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
