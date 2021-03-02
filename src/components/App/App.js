import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import HeaderNoAuth from "../HeaderNoAuth/HeaderNoAuth";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import PopupMenu from "../PopupMenu/PopupMenu";

import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import { moviesApi } from "../../utils/MoviesApi";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("prevMovies")) {
      const localCards = JSON.parse(localStorage.getItem("prevMovies"));
      setCards(localCards);
    }
  }, []);

  function runSearch(inputSearch) {
    moviesApi
      .getInitialCards()
      .then((allCards) => {
        const filterCards = allCards.filter((card) => {
          if (card.nameRU.toLowerCase().includes(inputSearch)) return card;
        });
        setCards(filterCards);
        localStorage.setItem("prevMovies", JSON.stringify(filterCards));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <HeaderNoAuth />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/movies">
          <Header />
          <Movies cards={cards} runSearch={runSearch} />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route exact path="/sign-up">
          <Register />
        </Route>
        <Route exact path="/sign-in">
          <Login />
        </Route>
        <Route exact path="/*">
          <NotFoundPage />
        </Route>
      </Switch>
      <PopupMenu />
    </div>
  );
}

export default App;
