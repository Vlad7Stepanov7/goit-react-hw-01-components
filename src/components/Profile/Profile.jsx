import PropTypes from 'prop-types';
import { Container, Avatar, Description, UserName, Text, List, ListItem } from './Profile.styled';

const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <Container>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <Text >{tag}</Text>
    <Text >{location}</Text>
  </Description>

  <List>
    <ListItem>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </ListItem>
    <ListItem>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </ListItem>
    <ListItem>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </ListItem>
  </List>
</Container>
    );
}



Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}

export default Profile;