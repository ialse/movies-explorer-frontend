import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies() {
    return (
        <>
            <SearchForm />
            <Preloader />
            <MoviesCardList />
            <MoviesCard />
        </>
    );
}

export default Movies;