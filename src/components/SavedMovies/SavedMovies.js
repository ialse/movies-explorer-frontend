import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect } from 'react';

function SavedMovies({
  userCards,
  deleteUserMovie,
  runSearchSavedMovies,
  inputFilterSearch,
  searchTrigger,
  onSearch,
  countMoviesToPage,
  handleCountMovies,
  isShortMovie,
  onFilter,
  page = {},
}) {
  /*useEffect(() => {
    searchTrigger(false);
  }, []);*/
  return (
    <div className="movies">
      <div className="movies__container">
        <SearchForm
          userCards={userCards}
          runSearchSavedMovies={runSearchSavedMovies}
          page={'saved-movies'}
          inputFilterSearch={inputFilterSearch}
          searchTrigger={searchTrigger}
          isShortMovie={isShortMovie}
          onFilter={onFilter}
        />
        <MoviesCardList
          cards={userCards}
          deleteUserMovie={deleteUserMovie}
          onSearch={onSearch}
          countMoviesToPage={countMoviesToPage}
          handleCountMovies={handleCountMovies}
          page={'saved-movies'}
        />
      </div>
    </div>
  );
}

export default SavedMovies;
