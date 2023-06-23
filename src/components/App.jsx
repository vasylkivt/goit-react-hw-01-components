import user from '../bd/userProfile/user.json';
import stats from '../bd/uploadStatistics/data.json';
import friends from '../bd/friendList/friends.json';
import transactions from '../bd/transactionsHistory/transactions.json';

import Section from './Section/Section';
import Profile from './UserProfile/UserProfile';
import StatisticList from './StatisticList/StatisticList';
import FriendList from './FriendList/FriendList';
import TableBody from './TransactionsTable/TableBody/TableBody';
import TableHead from './TransactionsTable/TableHead/TableHead';

import css from './App.module.css';

export const App = () => {
  return (
    <>
      <Section title="Profile" className={css.profile}>
        <Profile user={user} />
      </Section>
      <Section title="Upload stats" className={css.statistics}>
        <StatisticList stats={stats} />
      </Section>
      <Section title="Friend List" className={css['friend-list']}>
        <FriendList friends={friends} />
      </Section>
      <Section
        title="Transaction History"
        className={css['transaction-history']}
      >
        <TableHead>
          <TableBody transactions={transactions} />
        </TableHead>
      </Section>
    </>
  );
};
