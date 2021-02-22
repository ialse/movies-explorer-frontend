import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
    return (
        <div className="movies">
            <div className="movies__container">
                <SearchForm />
                {/* <Preloader / > */}
                <MoviesCardList />
            </div>
        </div>
    );
}

export default SavedMovies;