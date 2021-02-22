import logo from '../../images/logo.svg';

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './FormSign.css';

const FormSign = memo(({ name, title, onSubmit, onChange, isInvalid, isLoading, btnName, changeCurrUrl }) => {
    return (

        <form className="form" name={`form_${name}`} noValidate onSubmit={onSubmit} >
            <div className="form__container" >
                <img className="promo__logo" alt="Логотип" src={logo}></img>
                <h2 className="form__title">{title}</h2>
                <label className="form__field">Имя
                    <input type="text" className="form__input" id={`form-name-${name}`} name="name" placeholder="Имя"
                        minLength="1" maxLength="30" onChange={onChange} />

                </label>
                <label className="form__field">
                    <input type="text" className="form__input" id={`form-email-${name}`} name="email" placeholder="Email"
                        minLength="1" maxLength="30" onChange={onChange} />

                </label>
                <label className="form__field">
                    <input type="password" className="form__input" id={`form-password-${name}`} name="password"
                        placeholder="Пароль" onChange={onChange} />

                </label>
                <button type="submit" className={`form__btn ${isInvalid ? 'form__btn_disabled' : ''}`} disabled={isInvalid}>
                    {isLoading
                        ? (<div className='spinner'></div >)
                        : btnName
                    }
                </button>
                {name === "sign-up" && <p className="form__text">Уже зарегистрированы? <Link to="/sign-in" onClick={() => changeCurrUrl('/sign-in')} className="form__link" >Войти</Link></p>}
            </div>
        </form>

    );
});

export default FormSign;