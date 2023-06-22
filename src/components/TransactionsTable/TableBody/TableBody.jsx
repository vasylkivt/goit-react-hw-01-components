import PropTypes from 'prop-types';

import TableItem from 'components/TransactionsTable/TableItem/TableItem';

export default function TableBody({ transactions }) {
  return (
    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id}>
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
