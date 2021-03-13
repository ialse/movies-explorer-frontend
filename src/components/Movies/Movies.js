import { useEffect } from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const IMAGE_URL = 'https://api.nomoreparties.co';

function Movies({
  cards,
  userCards,
  runSearch,
  saveMovie,
  deleteUserMovie,
  isLoading,
  countMoviesToPage,
  handleCountMovies,
  searchTrigger,
  onSearch,
  onFilter,
  isShortMovie,
}) {
  function httpCheck(value) {
    return !/(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i.test(
      value
    );
  }

  const newMoviesList = cards.map((movie) => {
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
      image: movie.image
        ? IMAGE_URL + movie.image.url
        : 'https://st4.depositphotos.com/2381417/26959/i/600/depositphotos_269592714-stock-photo-thumbnail-image-placeholder-forums-blogs.jpg',
      trailer: !httpCheck(movie.trailerLink)
        ? movie.trailerLink
        : 'https://st4.depositphotos.com/2381417/26959/i/600/depositphotos_269592714-stock-photo-thumbnail-image-placeholder-forums-blogs.jpg',
      thumbnail: movie.image
        ? IMAGE_URL + movie.image.formats.thumbnail.url
        : 'https://st4.depositphotos.com/2381417/26959/i/600/depositphotos_269592714-stock-photo-thumbnail-image-placeholder-forums-blogs.jpg',
    };
  });

  return (
    <div className="movies">
      <div className="movies__container">
        <SearchForm
          page={'movies'}
          runSearch={runSearch}
          searchTrigger={searchTrigger}
          onFilter={onFilter}
          isShortMovie={isShortMovie}
        />
        <MoviesCardList
          page={'movies'}
          cards={newMoviesList}
          userCards={userCards}
          saveMovie={saveMovie}
          deleteUserMovie={deleteUserMovie}
          isLoading={isLoading}
          onSearch={onSearch}
          countMoviesToPage={countMoviesToPage}
          handleCountMovies={handleCountMovies}
        />
      </div>
    </div>
  );
}

export default Movies;
