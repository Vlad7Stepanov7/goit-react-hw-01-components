import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(({avatar, name, isOnline, id}) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id}
                />
            ))}
</ul>
    );
}

FriendList.propsTypes = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired),
}

export default FriendList;