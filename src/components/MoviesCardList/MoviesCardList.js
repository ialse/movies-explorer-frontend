import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';

function MoviesCardList({
  cards,
  userCards,
  saveMovie,
  deleteUserMovie,
  isLoading,
}) {
  const [countMoviesInit, setCountMoviesInit] = useState(0);
  const [countLoadMovies, setCountLoadMovies] = useState(0);
  const [countMovies, setCountMovies] = useState(12);

  /* function handleResize() {
    console.log('handleResize');

    const width = document.documentElement.clientWidth;
    console.log('width: ' + width);

    if (width > 850) {
      setCountMoviesInit(12);
      setCountLoadMovies(3);
    } else if (450 < width && width < 850) {
      setCountMoviesInit(8);
      setCountLoadMovies(2);
    } else {
      console.log('else');
      setCountMoviesInit(5);
      setCountLoadMovies(2);
    }
  }

  useEffect(() => {
    console.log('useEffect1');
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log('useEffect2');
    setCountMovies(countMoviesInit);
  }, [handleResize]);

  console.log('countMovies: ' + countMovies);*/

  function handleClick() {
    setCountMovies(countMovies + countLoadMovies);
  }

  return (
    <>
      <section className="cards">
        {isLoading ? (
          <Preloader />
        ) : !cards.length ? (
          <div className={`cards__empty`}>Ничего не найдено</div>
        ) : (
          <div className={`cards__container`}>
            {cards.map(
              (card, index) =>
                index < countMovies && (
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

      {countMovies < cards.length && (
        <button className="more" onClick={handleClick}>
          Ещё
        </button>
      )}
    </>
  );
}

export default MoviesCardList;
