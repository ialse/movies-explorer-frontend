import "./Movies.css";
/*Временные константы с фильмами*/
import moviesList from "../../constants/movies";
import userMoviesList from "../../constants/userMovies";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const IMAGE_URL = "https://api.nomoreparties.co";

function Movies({ cards, userCards, runSearch, saveMovie, deleteUserMovie }) {
  const newMoviesList = cards.map((movie) => {
    let isUserSaved = false;

    /*userMoviesList.forEach((userMovie) => {
      userMovie.movieId === movie.id && (isUserSaved = true);
    });*/

    return {
      movieId: String(movie.id),
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      country: movie.country,
      director: movie.director,
      year: movie.year,
      description: movie.description,
      duration: movie.duration,
      image: movie.image ? IMAGE_URL + movie.image.url : null,
      trailer: movie.trailerLink,
      thumbnail: movie.image
        ? IMAGE_URL + movie.image.formats.thumbnail.url
        : null,
      /*isUserSaved,*/
    };
  });

  return (
    <div className="movies">
      <div className="movies__container">
        <SearchForm runSearch={runSearch} />
        {/*<Preloader />*/}
        <MoviesCardList
          cards={newMoviesList}
          userCards={userCards}
          saveMovie={saveMovie}
          deleteUserMovie={deleteUserMovie}
        />
      </div>
    </div>
  );
}

export default Movies;
