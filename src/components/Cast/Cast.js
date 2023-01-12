import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/movieApi';
import { List, Character } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  if (!cast) {
    return null;
  }
  return (
    <List>
      {cast.map(({ id, character, name, profile_path }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
          />
          <p>{name}</p>
          <Character>Character: {character}</Character>
        </li>
      ))}
    </List>
  );
};
