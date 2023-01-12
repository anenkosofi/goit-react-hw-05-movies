import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { IoIosPeople, IoIosPaper, IoIosArrowDropleft } from 'react-icons/io';
import { getMovieById } from 'services/movieApi';
import {
  Section,
  Container,
  MovieWrapper,
  Title,
  GenreWrapper,
  Genre,
  AdditionalInfo,
  NavItem,
} from './MovieDetails.styled';
import defaultPicture from '../../images/default-movie.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { genres, overview, poster_path, release_date, title, vote_average } =
    movie;

  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <Section>
        <Container>
          <NavItem to={backLinkHref}>
            <IoIosArrowDropleft size={24} />
            <span>Go back</span>
          </NavItem>
          <MovieWrapper>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultPicture
              }
              alt={title}
            />
            <div>
              <Title>
                {title} ({new Date(release_date).getFullYear()})
              </Title>
              <p>Use Score: {Math.round(vote_average * 10)}%</p>
              <p>
                <b>Overview</b>
              </p>
              <p>{overview}</p>
              <p>
                <b>Genres</b>
              </p>
              <GenreWrapper>
                {genres.map(({ name }) => (
                  <Genre key={name}>{name}</Genre>
                ))}
              </GenreWrapper>
            </div>
          </MovieWrapper>
          <AdditionalInfo>
            <h2>Additional information</h2>
            <ul>
              <li>
                <NavItem to="cast" state={{ from: backLinkHref }}>
                  <IoIosPeople size={24} />
                  <span>Cast</span>
                </NavItem>
              </li>
              <li>
                <NavItem to="reviews" state={{ from: backLinkHref }}>
                  <IoIosPaper size={24} />
                  <span>Reviews</span>
                </NavItem>
              </li>
            </ul>
          </AdditionalInfo>
          <Suspense
            fallback={<div>Please wait while minions do their work...</div>}
          >
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </main>
  );
};

export default MovieDetails;
