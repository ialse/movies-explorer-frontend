import { Link } from 'react-router-dom';
import accountPic from '../../images/account.svg';
import btnClose from '../../images/button-close.svg';

import './PopupMenu.css';

function PopupMenu() {
    return (
        <nav className="popup">
            <div className="popup__container">
                <Link to="/" className="popup__link">Главная</Link>
                <Link to="/movies" className="popup__link">Фильмы</Link>
                <Link to="/saved-movies" className="popup__link">Сохранённые фильмы</Link>
                <Link to="/profile" className="popup__link-account">
                    <span className="popup__link-text">Аккаунт</span>
                    <img className="popup__pic" alt="Аккаунт" src={accountPic}></img>
                </Link>
                <button className="popup__btn-close" />
            </div>
        </nav>
    );
}

export default PopupMenu;