import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";

function MoviesCardList({ cards }) {
  const newCards = cards.filter((card, index) => {
    if (index < 19) return card;
  });

  const [countMovies, setCountMovies] = useState(12);

  function handleClick() {
    setCountMovies(countMovies + 3);
  }

  useEffect(() => console.log(countMovies, newCards.length), [handleClick]);

  return (
    <>
      <section className="cards">
        {newCards.map(
          (card, index) =>
            index < countMovies && <MoviesCard card={card} key={card.id} />
        )}
      </section>
      {countMovies < newCards.length && (
        <button className="more" onClick={handleClick}>
          Ещё
        </button>
      )}
    </>
  );
}

export default MoviesCardList;
