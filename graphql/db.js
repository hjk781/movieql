let movies = [
  {
    id: 0,
    name: "Star Wars",
    score: 1
  },
  {
    id: 1,
    name: "Avengers",
    score: 8
  },
  {
    id: 2,
    name: "God fater",
    score: 99
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleaneMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleaneMovies.length) {
    movies = cleaneMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
