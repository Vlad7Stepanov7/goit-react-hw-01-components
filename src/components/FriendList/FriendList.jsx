import FriendListItem from './components/FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';

const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(({avatar, name, isOnline, id}) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id}
                />
            ))}
       </List>
    );
}

FriendList.propsTypes = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired),
}

export default FriendList;