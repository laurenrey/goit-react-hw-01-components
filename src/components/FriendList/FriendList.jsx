import { FriendListItem } from './FriendListItem';
import { Friends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ name, avatar, id, isOnline }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </Friends>
  );
};
