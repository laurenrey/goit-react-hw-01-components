import PropTypes from 'prop-types';
import {
  FriendItemCard,
  Status,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItemCard key={id}>
      <Status isOnline={isOnline}></Status>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItemCard>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
