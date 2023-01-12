import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaQuoteLeft } from 'react-icons/fa';
import { getMovieReviews } from 'services/movieApi';
import { Blockquote } from './Reviews.styled';

const Reviews = () => {
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
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content, url }) => (
          <li key={id}>
            <Blockquote cite={url}>
              <cite>Author: {author}</cite>
              <p>
                <FaQuoteLeft size={24} />
                {content}
              </p>
            </Blockquote>
          </li>
        ))
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;
