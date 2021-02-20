import logo from '../../images/logo.svg';
import searchPic from '../../images/search-pic.svg';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <img className="search__pic" src={searchPic}></img>
                <input className="search__input" type="text" placeholder="Введите название фильма"></input>
                <button className="search__button" type="submit" ></button>
                <div className="search__separator" ></div>
                <FilterCheckbox />
            </form>
            <div className="search__line" ></div>
        </section>
    );
}

export default SearchForm;