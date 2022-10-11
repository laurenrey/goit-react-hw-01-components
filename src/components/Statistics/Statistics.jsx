import {
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
  Wrapper,
} from './Statistics.styled';

import PropTypes from 'prop-types';
import { getRandomColor } from 'services/getRandomColor';

export const Statistics = ({ stats, title }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ label, percentage, id }) => (
          <StatItem key={id} style={{ backgroundColor: `${getRandomColor()}` }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};
