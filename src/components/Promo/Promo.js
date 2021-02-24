import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import logoWeb from '../../images/logo-web.svg';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__header">
                    <Link to="/">
                        <img className="promo__logo" alt="Логотип" src={logo}></img>
                    </Link>
                    <nav className="promo__sign">
                        <Link to="/sign-up" className="promo__signup">Регистрация</Link>
                        <Link to="/sign-in" className="promo__signin">
                            <button className="promo__signin-btn">Войти</button>
                        </Link>
                    </nav>
                </div>
                <div className="promo__main">
                    <div className="promo__text">
                        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                        <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
                    </div>
                    <img className="promo__image" alt="Логотип" src={logoWeb}></img>
                </div>
                <NavTab />
            </div>
        </section >
    );
}

export default Promo;