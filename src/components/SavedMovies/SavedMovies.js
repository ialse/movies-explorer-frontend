import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useCallback, useEffect, useState } from "react";
import { mainApi } from "../../utils/MainApi";

function SavedMovies({ userCards, deleteUserMovie }) {
  return (
    <div className="movies">
      <div className="movies__container">
        <SearchForm />
        {/* <Preloader / > */}
        <MoviesCardList cards={userCards} deleteUserMovie={deleteUserMovie} />
      </div>
    </div>
  );
}

export default SavedMovies;
