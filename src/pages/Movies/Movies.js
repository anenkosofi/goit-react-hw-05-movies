import { useEffect, useState } from 'react';
import { getMovieByQuery } from 'services/movieApi';
import { MovieList } from 'components/MovieList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    getMovieByQuery(query).then(({ results }) => setMovies(results));
  }, [query]);

  const submitHandler = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim().toLowerCase();

    if (!searchQuery) {
      alert('Search box cannot be empty. Please enter the word.');
      return;
    }
    setQuery(searchQuery);

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList items={movies} />}
    </div>
  );
};
