import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statisctics";
import { FriendList, FriendListItem } from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";


import user from "../data/user.json"
import data from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"

export const App = () => {
  return (
    <>
      <h2 className="task">Task 1 - Profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
       <h2 className="task">Task 2 - Statistics</h2>
      <Statistics title="Upload stats" stats={data} />
       <h2 className="task">Task 3 - FriendList</h2>
      <FriendList children={<FriendListItem friends={friends} />} />  
       <h2 className="task">Task 4 - TransactionHistory</h2>
      <TransactionHistory items={transactions} />
    </>
  );
};
