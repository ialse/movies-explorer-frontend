import filterPic from '../../images/filter.svg';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="filter">
            <img className="filter__pic" alt="Фильтр" src={filterPic}></img>
            <span className="filter__name">Короткометражки</span>
        </div>
    );
}

export default FilterCheckbox;