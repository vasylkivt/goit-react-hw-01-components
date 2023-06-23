import PropTypes from 'prop-types';
import css from './StatisticItem.module.css';

export default function StatisticItem({ percentage, label }) {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
}

StatisticItem.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
