import "./MoviesCard.css";
import film from "../../images/film2.jpg";
const IMAGE_URL = "https://api.nomoreparties.co";

function MoviesCard({ card, userCards, saveMovie, deleteUserMovie }) {
  let isUserMovie = false;
  let userMovieId;

  if (userCards) {
    isUserMovie = userCards.some((userCard) => {
      if (userCard.movieId === card.movieId) {
        userMovieId = userCard._id;
        return true;
      }
    });
  }

  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">{card.nameRU}</h3>
        <span className="card__time">{card.duration}</span>
        <button
          className={`card__button
                    ${
                      card._id
                        ? "card__button_remove"
                        : isUserMovie
                        ? "card__button_save"
                        : ""
                    }`}
          onClick={() =>
            isUserMovie || card._id
              ? deleteUserMovie(card._id ? card._id : userMovieId)
              : saveMovie(card)
          }
        />
      </div>
      <img
        className="card__image"
        alt="Фильм"
        src={card.image ? card.image : film}
      />
    </div>
  );
}

export default MoviesCard;
