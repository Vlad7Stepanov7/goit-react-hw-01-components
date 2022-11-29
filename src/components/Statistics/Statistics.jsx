import PropTypes from 'prop-types';
import { ContainerStatistics, Title, Text, ListItem } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
    return (
 <ContainerStatistics>
            
    {title && <Title>{title}</Title>}
            
  <ul>
     {stats.map(stat => (
     <ListItem key={stat.id}>
          <Text>{stat.label}</Text>
           <Text>{stat.percentage}</Text>
     </ListItem>
    ))}
  </ul>
</ContainerStatistics>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })),
}
export default Statistics;