import TransactionHistoryItem from 'components/TransactionHistoryItem/TransactionHistoryItem';

export default function transactionsHistoryTable({
  titleType,
  titleAmount,
  titleCurrency,
  transactions,
}) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>{titleType}</th>
          <th>{titleAmount}</th>
          <th>{titleCurrency}</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            id={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}
