const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bfcd7a06a5bb09fb5aafe756d2f60f73';

async function getTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

async function getMovieById(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

async function getMovieCast(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

async function getMovieReviews(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

async function getMovieByQuery(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

export {
  getTrendingMovies,
  getMovieById,
  getMovieCast,
  getMovieReviews,
  getMovieByQuery,
};
