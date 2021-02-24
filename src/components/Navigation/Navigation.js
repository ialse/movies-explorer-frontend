import { Link } from 'react-router-dom';
import accountPic from '../../images/account.svg';

import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <Link to="/movies" className="navigation__link">Фильмы</Link>
            <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
            <Link to="/profile" className="navigation__link-account">
                <span className="navigation__link-text">Аккаунт</span>
                <img className="navigation__pic" alt="Аккаунт" src={accountPic}></img>
            </Link>
        </nav>
    );
}

export default Navigation;

