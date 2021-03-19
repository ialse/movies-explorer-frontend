import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
import "./HeaderNoAuth.css";

function HeaderNoAuth() {
  return (
    <header className="header-no-auth">
      <div className="header-no-auth__container">
        <Link to="/">
          <img className="header-no-auth__logo" alt="Логотип" src={logo}></img>
        </Link>
        <nav className="header-no-auth__sign">
          <Link to="/sign-up" className="header-no-auth__signup">
            Регистрация
          </Link>
          <Link to="/sign-in" className="header-no-auth__signin">
            <button className="header-no-auth__signin-btn">Войти</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderNoAuth;
