import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useCallback, useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';

function SavedMovies({
  userCards,
  deleteUserMovie,
  runSearchSavedMovies,
  inputFilterSearch,
}) {
  return (
    <div className="movies">
      <div className="movies__container">
        <SearchForm
          userCards={userCards}
          runSearchSavedMovies={runSearchSavedMovies}
          page={'saved-movie'}
          inputFilterSearch={inputFilterSearch}
        />
        <MoviesCardList cards={userCards} deleteUserMovie={deleteUserMovie} />
      </div>
    </div>
  );
}

export default SavedMovies;
