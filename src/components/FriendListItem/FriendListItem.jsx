import PropTypes from 'prop-types';
import { ListItem, Status } from './FriendListItem.styled';
const FriendListItem = ({avatar, name, isOnline}) => {
    return (
      <ListItem>
       <Status isOnline={isOnline}></Status>
       <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
      </ListItem>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}

export default FriendListItem;