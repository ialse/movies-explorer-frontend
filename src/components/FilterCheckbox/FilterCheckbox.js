import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ page, onFilter, isShortMovie }) {
  function handleOnFilter() {
    onFilter(page);
  }
  return (
    <div className="filter">
      <button
        type="button"
        className={`filter__button ${isShortMovie && 'filter__button_on'}`}
        onClick={handleOnFilter}
      ></button>
      <span className="filter__name">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
