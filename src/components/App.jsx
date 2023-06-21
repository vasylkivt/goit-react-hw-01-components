import user from '../bd/userProfile/user.json';
import stats from '../bd/uploadStatistics/data.json';
import friends from '../bd/friendList/friends.json';
import transactions from '../bd/transactionsHistory/transactions.json';

import Profile from './userProfile/userProfile';
import StatisticList from './statisticList/statisticList';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionsHistoryTable/transactionsHistoryTable';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <StatisticList title="Upload stats" stats={stats} />
      <FriendList friends={friends} />;
      <TransactionHistory
        transactions={transactions}
        titleType="Type"
        titleAmount="Amount"
        titleCurrency="Currency"
      />
      ;
    </>
  );
};
