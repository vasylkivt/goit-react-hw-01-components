// import PropTypes from 'prop-types';

export default function TableHead({ children }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {children}
    </table>
  );
}

// TableHead.propTypes = {};
