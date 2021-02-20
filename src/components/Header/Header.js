import logo from '../../images/logo.svg';
import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className="header">
            <a className="header__link" href="/">
                <img className="header__logo" alt="Логотип" src={logo}></img>
            </a>
            <Navigation />
        </header>
    );
}

export default Header;