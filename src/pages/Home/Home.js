import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/movieApi';
import { MovieList } from 'components/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList items={movies} />
    </main>
  );
};
