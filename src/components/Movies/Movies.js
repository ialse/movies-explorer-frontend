import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const IMAGE_URL = 'https://api.nomoreparties.co';

function Movies({
  cards,
  userCards,
  runSearch,
  saveMovie,
  deleteUserMovie,
  isLoading,
}) {
  const newMoviesList = cards.map((movie) => {
    let isUserSaved = false;

    /*userMoviesList.forEach((userMovie) => {
      userMovie.movieId === movie.id && (isUserSaved = true);
    });*/

    return {
      movieId: String(movie.id),
      nameRU: movie.nameRU ? movie.nameRU : 'Не указано название',
      nameEN: movie.nameEN ? movie.nameEN : 'Не указано название',
      country: movie.country ? movie.country : 'Не указана страна',
      director: movie.director ? movie.director : 'Не указан режиссер',
      year: movie.year ? movie.year : 'Не указан год',
      description: movie.description
        ? movie.description
        : 'Не указано описание',
      duration: movie.duration ? movie.duration : 'Не указано время',
      image: movie.image ? IMAGE_URL + movie.image.url : null,
      trailer: movie.trailerLink ? movie.trailerLink : 'http://youtube.com',
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
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default Movies;
