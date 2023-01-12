import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaQuoteLeft } from 'react-icons/fa';
import { getMovieReviews } from 'services/movieApi';
import { Blockquote } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => setReviews(results));
  }, [movieId]);

  if (!reviews) {
    return null;
  }
  return (
    <ul>
      {reviews.map(({ id, author, content, url }) => (
        <li key={id}>
          <Blockquote cite={url}>
            <p>
              <FaQuoteLeft size={24} />
              {content}
            </p>
            <cite>Author: {author}</cite>
          </Blockquote>
        </li>
      ))}
    </ul>
  );
};
