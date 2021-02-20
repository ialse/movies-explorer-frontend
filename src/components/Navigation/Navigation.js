import accountPic from '../../images/account.svg';

import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <a href="/movies" className="navigation__link">Фильмы</a>
            <a href="/saved-movies" className="navigation__link">Сохранённые фильмы</a>
            <a href="/profile" className="navigation__link-account">
                <span className="navigation__link-text">Аккаунт</span>
                <img className="navigation__pic" alt="Аккаунт" src={accountPic}></img>
            </a>
        </nav>
    );
}

export default Navigation;

