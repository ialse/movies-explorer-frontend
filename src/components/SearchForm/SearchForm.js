import searchPic from '../../images/search-pic.svg';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';

function SearchForm({
  runSearch,
  runSearchSavedMovies,
  page,
  inputFilterSearch,
}) {
  const [inputSearch, setInputSearch] = useState('');
  const [isValid, setIsValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (page === 'saved-movie' && inputSearch) {
      runSearchSavedMovies(inputSearch);
      return;
    } else if (page === 'movie' && inputSearch) {
      setIsValid(true);
      runSearch(inputSearch.toLowerCase());
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

  function handleClickFilterDelete() {
    runSearchSavedMovies('');
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
          value={inputSearch}
        />
        <button className="search__button" type="submit"></button>
        <div className="search__separator"></div>
        <FilterCheckbox />
      </form>
      <div className="search__helpers">
        <div className="search__error">
          {!isValid && 'Нужно ввести ключевое слово'}
        </div>
        {inputFilterSearch && (
          <div className="search__filter">
            <span className="search__filter-text">
              {`Фильтр: ${inputFilterSearch}`}
            </span>
            <button
              className="search__filter-delete"
              title="Очистить"
              onClick={handleClickFilterDelete}
            ></button>
          </div>
        )}
      </div>
      <div className="search__line"></div>
    </section>
  );
}

export default SearchForm;
