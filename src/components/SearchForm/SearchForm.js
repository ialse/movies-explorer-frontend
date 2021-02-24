import searchPic from '../../images/search-pic.svg';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <img className="search__pic" src={searchPic} alt="Поиск"></img>
                <input className="search__input" type="text" placeholder="Введите название фильма"></input>
                <button className="search__button" type="submit"></button>
                <div className="search__separator" ></div>
                <FilterCheckbox />
            </form>
            <div className="search__line" ></div>
        </section>
    );
}

export default SearchForm;