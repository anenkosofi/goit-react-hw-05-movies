import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/movieApi';
import { List, Character } from './Cast.styled';
import defaultPicture from '../../images/default-profile-icon.jpg';

const Cast = () => {
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
      {cast.length !== 0 ? (
        cast.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultPicture
              }
              alt={name}
            />
            <p>{name}</p>
            <Character>Character: {character}</Character>
          </li>
        ))
      ) : (
        <p style={{ fontSize: 20 }}>No information.</p>
      )}
    </List>
  );
};

export default Cast;
