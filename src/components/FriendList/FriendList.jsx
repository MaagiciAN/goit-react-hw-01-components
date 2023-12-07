import css from './FriendList.module.css';

const FriendList = ({children}) => {
    return (
        <ul className={css.friendList}>{children}</ul>
        )
}

const FriendListItem = ({ friends }) => {
    return friends.map((friend) => (
        <li key={friend.id} className={css.item}>
            <span className={friend.isOnline ? css.statusOnline : css.statusNotOnline}></span>
            <img className={css.avatar} src={friend.avatar } alt={ friend.name } width="48" />
            <p className={css.name}>{ friend.name }</p>
        </li>
    ))
}

export { FriendList, FriendListItem }