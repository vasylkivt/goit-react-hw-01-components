// import PropTypes from 'prop-types';
import css from './TableHead.module.css';

export default function TableHead({ children }) {
  return (
    <table className={css['transaction-history']}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      {children}
    </table>
  );
}

// TableHead.propTypes = {};
