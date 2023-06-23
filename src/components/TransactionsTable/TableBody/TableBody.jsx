import PropTypes from 'prop-types';
import css from './TableBody.module.css';

import TableItem from 'components/TransactionsTable/TableItem/TableItem';

export default function TableBody({ transactions }) {
  return (
    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr className={css.th} key={id}>
          <TableItem type={type} amount={amount} currency={currency} />
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
