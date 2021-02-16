import './Promo.css';

function Promo() {
    return (
        <div className="promo">
            <div className="promo__header">
                <div className="promo__logo"></div>
                <div className="promo__sign"></div>
            </div>
            <div className="promo__text">
                <div className="promo__title">Учебный проект студента факультета Веб-разработки.</div>
                <div className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</div>
            </div>
            <div className="promo__image"></div>
            <button className="promo__button">Узнать больше</button>
        </div>
    );
}

export default Promo;