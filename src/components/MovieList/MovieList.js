import { Link } from 'react-router-dom';
import { List } from './MovieList.styled';

export const MovieList = ({ items }) => {
  return (
    <List>
      {items.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </List>
  );
};
