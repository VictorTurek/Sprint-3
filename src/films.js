// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movies => movies.director);
  //console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let movies = array.filter(movies => movies.director == director);
  //console.log("EXERCICE 2 ->", movies);
  return movies;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = array.filter(movie => movie.director === director);
  let totalScore = movies.reduce((total, movie) => total + movie.score, 0);
  let averageScore = totalScore / movies.length;
  //console.log("EXERCICE 3 ->", averageScore.toFixed(2));
  return parseFloat(averageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titles = array.map(movie => movie.title);
  let orderTitles = titles.sort();
  let firstTitles = orderTitles.slice(0, 20);
  // console.log("EXERCICE 4 ->", firstTitles);
  return firstTitles;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let copiaArray = [...array];
  let years = copiaArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; //si los years son distintos, ordena por year.
    }
    return a.title.localeCompare(b.title);   // Si los years son iguales, ordenar por titulo.

  });
  //console.log("EXERCICE 5 -> array", array);
  //console.log("EXERCICE 5 -> years", years);
  return years;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let movies = array.filter(movie => movie.genre.includes(category));
  let totalScore = movies.reduce((total, movie) => total + movie.score, 0);
  let averageScore = totalScore / movies.length;

  //console.log("EXERCICE 6 -> movies", movies);
  //console.log("EXERCICE 6 -> average score", averageScore.toFixed(2));
  return parseFloat(averageScore.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  const newMovies = JSON.parse(JSON.stringify(movies));

  for (let i = 0; i < newMovies.length; i++) {
    let newMovie = newMovies[i];
    let time = newMovie.duration.match(/(\d+)?h\s*(\d+)?(min)?/);

    if (time) {
      const hours = parseInt(time[1]) || 0;
      const minutes = parseInt(time[2]) || 0;
      const timeInMinutes = hours * 60 + minutes;
      newMovie.duration = timeInMinutes;
    }
  }
  // console.log("EXERCICE 7 -> movies", movies);
  // console.log("EXERCICE 7 -> moviesMinutes", newMovies);
  return newMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) { 
  let moviesOfTheYear = movies.filter(function(movie) { //filtramos las peliculas del ano "year".
    return movie.year === year;
  });

  if (moviesOfTheYear.length === 0) { //Manejamos el caso en el que no haya peliculas de un ano.
    console.log("No hay películas para el año especificado.");
    return [];
  }


  let highestScore = Math.max(...moviesOfTheYear.map(movie => movie.score)); //con el .map obtenemos un array de puntuaciones. Con el "..." lo expandimos en argumentos individuales y con el math.Max, buscamos el mayor valor.

  let bestMoviesOfTheYear = moviesOfTheYear.filter(function(movie) { //ahora que tenemos el mayor valor del atributo score, filtramos el array de objetos para buscar coincidencias con ese valor.
    return movie.score === highestScore;
  });

  // console.log("Películas del año:", moviesOfTheYear);
  // console.log("Películas con la puntuación más alta:", bestMoviesOfTheYear);

  return bestMoviesOfTheYear;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
