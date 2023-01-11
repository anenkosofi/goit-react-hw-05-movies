import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/movieApi';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }
  const { genres, overview, poster_path, release_date, title } = movie;
  return (
    <main>
      <section>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div>
          <h1>
            {title} ({release_date})
          </h1>
          <p>User Score:</p>
          <p>Overview</p>
          <p>{overview}</p>
          <p>Genres</p>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
        </div>
      </section>
      <section>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </main>
  );
};
