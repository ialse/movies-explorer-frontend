import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";

function MoviesCardList({ cards, userCards, saveMovie, deleteUserMovie }) {
  const [countMovies, setCountMovies] = useState(12);

  function handleClick() {
    setCountMovies(countMovies + 3);
  }

  return (
    <>
      <section className="cards">
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
