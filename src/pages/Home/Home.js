import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/movieApi';
import { MovieList } from 'components/MovieList';
import { Section, Container, Heading } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <Heading>Trending today</Heading>
          <MovieList items={movies} />
        </Container>
      </Section>
    </main>
  );
};

export default Home;
