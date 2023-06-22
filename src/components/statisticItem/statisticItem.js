import PropTypes from 'prop-types';

export default function StatisticItem({ percentage, label }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
}

StatisticItem.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
