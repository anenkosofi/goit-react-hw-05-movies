import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { getMovieByQuery } from 'services/movieApi';
import { MovieList } from 'components/MovieList';
import {
  Section,
  Container,
  Form,
  Field,
  Label,
  Input,
  Button,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [queryString, setQueryString] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovieByQuery(query).then(({ results }) => {
      if (!results.length) {
        alert(`No result containing ${query} were found.`);
        return;
      }
      setMovies(results);
    });
  }, [query]);

  useEffect(() => {
    if (!queryParam) {
      return;
    }
    getMovieByQuery(queryParam).then(({ results }) => setMovies(results));
  }, [queryParam]);

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQueryString(value.trim().toLowerCase());
  };

  const submitHandler = e => {
    e.preventDefault();

    if (!queryString) {
      alert('Search box cannot be empty. Please enter the word.');
      return;
    }
    setQuery(queryString);
    setSearchParams({ query: queryString });

    setQueryString('');
  };

  return (
    <main>
      <Section>
        <Container>
          <Form onSubmit={submitHandler}>
            <Field>
              <Input
                type="text"
                name="query"
                value={queryString}
                autoComplete="off"
                placeholder=" "
                onChange={handleChange}
              />
              <Label>Search movies</Label>
            </Field>
            <Button type="submit">
              <BsSearch size={24} />
            </Button>
          </Form>
          {movies.length > 0 && <MovieList items={movies} />}
        </Container>
      </Section>
    </main>
  );
};

export default Movies;
