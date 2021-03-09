import searchPic from '../../images/search-pic.svg';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';
import { useForm } from '../../customHook/useForm';

function SearchForm({ runSearch }) {
  const [inputSearch, setInputSearch] = useState('');
  const [isValid, setIsValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputSearch) {
      setIsValid(true);
      runSearch(inputSearch);
      return;
    }
    setIsValid(false);
  }

  function handleChange(e) {
    setInputSearch(e.target.value);
    if (e.target.value) {
      setIsValid(true);
    }
  }

  return (
    <section className="search">
      <form className="search__form" noValidate onSubmit={handleSubmit}>
        <img className="search__pic" src={searchPic} alt="Поиск"></img>
        <input
          className="search__input"
          type="text"
          name="search"
          placeholder="Введите название фильма"
          required
          onChange={handleChange}
        />
        <button className="search__button" type="submit"></button>
        <div className="search__separator"></div>
        <FilterCheckbox />
      </form>
      <div className="search__error">
        {!isValid && 'Нужно ввести ключевое слово'}
      </div>
      <div className="search__line"></div>
    </section>
  );
}

export default SearchForm;
