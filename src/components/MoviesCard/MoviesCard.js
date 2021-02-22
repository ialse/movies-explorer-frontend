import './MoviesCard.css';
import film from '../../images/film2.jpg';

function MoviesCard() {
    return (
        <div className="card">
            <div className="card__header">
                <h3 className="card__title">33 слова о дизайне</h3>
                <span className="card__time" >1ч 47м</span>
                <button className="card__button"></button>
            </div>
            <img className="card__image" alt="Фильм" src={film}></img>
        </div>
    );
}

export default MoviesCard;