import logo from '../../images/logo.svg';
import logoWeb from '../../images/logo-web.svg';
import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__header">
                <img className="promo__logo" alt="Логотип" src={logo}></img>
                <nav className="promo__sign">
                    <a href="#" className="promo__signup">Регистрация</a>
                    <button className="promo__signin">Войти</button>
                </nav>
            </div>
            <div className="promo__main">
                <div className="promo__text">
                    <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
                </div>
                <img className="promo__image" alt="Логотип" src={logoWeb}></img>
            </div>
            <button className="promo__button">Узнать больше</button>
        </section>
    );
}

export default Promo;