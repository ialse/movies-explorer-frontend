import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <>
            <section className="cards">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </section>
            <section className="more">Ещё</section>
        </>
    );
}

export default MoviesCardList;
