import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  cards,
  userCards,
  saveMovie,
  deleteUserMovie,
  isLoading,
  onSearch,
  countMoviesToPage,
  handleCountMovies,
  page,
  textError,
  clearTextError,
}) {
  function handleClick() {
    handleCountMovies(countMoviesToPage.current + countMoviesToPage.add);
  }

  return (
    <>
      <section className="cards">
        {isLoading ? (
          <Preloader />
        ) : textError ? (
          <div className="cards__empty">{textError}</div>
        ) : !cards.length ? (
          <div className="cards__empty">
            {onSearch
              ? 'Ничего не найдено'
              : page === 'saved-movies'
              ? 'Добавьте сюда фильмы'
              : ''}
          </div>
        ) : (
          <div className={`cards__container`}>
            {cards.map(
              (card, index) =>
                index < countMoviesToPage.current && (
                  <MoviesCard
                    key={card.id ? card.id : card.movieId}
                    card={card}
                    userCards={userCards}
                    saveMovie={saveMovie}
                    deleteUserMovie={deleteUserMovie}
                  />
                )
            )}
          </div>
        )}
      </section>

      {!isLoading && !textError && countMoviesToPage.current < cards.length && (
        <button className="more" onClick={handleClick}>
          Ещё
        </button>
      )}
    </>
  );
}

export default MoviesCardList;
