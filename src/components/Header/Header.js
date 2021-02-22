import logo from '../../images/logo.svg';
import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <a className="header__link" href="/">
                    <img className="header__logo" alt="Логотип" src={logo}></img>
                </a>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;