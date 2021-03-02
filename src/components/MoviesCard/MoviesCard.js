import "./MoviesCard.css";
import film from "../../images/film2.jpg";
const IMAGE_URL = "https://api.nomoreparties.co";

function MoviesCard({ card }) {
  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">{card.nameRU}</h3>
        <span className="card__time">{card.duration}</span>
        <button
          className={`card__button
                    ${
                      card.isUserSaved
                        ? "card__button_save"
                        : card.movieId
                        ? "card__button_remove"
                        : ""
                    }`}
        />
      </div>
      <img
        className="card__image"
        alt="Фильм"
        src={card.image ? IMAGE_URL + card.image : film}
      />
    </div>
  );
}

export default MoviesCard;
