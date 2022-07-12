export const getMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .catch(error => alert('Something went wrong.  Please try again later'));
}

export const getDetails = (movieId) => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + movieId)
      .then(response => response.json())
      .catch(error => alert('Something went wrong.  Please try again later'))
}