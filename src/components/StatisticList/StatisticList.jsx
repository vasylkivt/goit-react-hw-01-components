import StatisticItem from 'components/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';
import css from './StatisticList.module.css';
import { getRandomHexColor } from 'utils';

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
