import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";

function MoviesCardList({ cards }) {
  /*Обрезаю 100 фильмов до 19
  const newCards = cards.filter((card, index) => {
    if (index < 19) return card;
  });*/

  const [countMovies, setCountMovies] = useState(12);

  function handleClick() {
    setCountMovies(countMovies + 3);
  }

  return (
    <>
      <section className="cards">
        {cards.map(
          (card, index) =>
            index < countMovies && <MoviesCard card={card} key={card.id} />
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
