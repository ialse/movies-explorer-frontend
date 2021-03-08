import { useEffect, useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
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
import * as auth from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [userCards, setUserCards] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("prevMovies")) {
      const localCards = JSON.parse(localStorage.getItem("prevMovies"));
      setCards(localCards);
    }
  }, []);

  /*Поиск фильмов в beatfilm*/
  function runSearch(inputSearch) {
    moviesApi
      .getAllCards()
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

  // ****** Обработчики для нашего API ******
  // Обработчик кнопки Редактировать на странице профиля
  function handleUpdateUser(newUserInfo) {
    /*setIsLoading(true);*/
    mainApi
      .saveUserInfoToServer(newUserInfo)
      .then((userData) => setCurrentUser(userData))
      .catch((err) => {
        /*api.setErrorServer(err);*/
      })
      .finally(() => {
        /*setIsLoading(false);*/
      });
  }

  // Получение сохраненных юзером фильмов
  function handleGetUserMovies() {
    mainApi
      .getUserMovies()
      .then((userSavedMovies) => {
        setUserCards(userSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Сохранение юзером фильмов
  function handleSaveMovie(newMovie) {
    /*setIsLoading(true);*/
    mainApi
      .saveMovieToServer(newMovie) // Сохраняем на сервере
      .then((userMovie) => {
        const newUserCards = [userMovie, ...userCards];
        setUserCards(newUserCards);
      })
      .catch((err) => {
        /*mainApi.setErrorServer(err);*/
      })
      .finally(() => {
        /*setIsLoading(false);*/
      });
  }

  // Удаление сохраненных юзером фильмов
  function handleDeleteUserMovie(movieDelId) {
    mainApi
      .deleteMovieToServer(movieDelId)
      .then(() => {
        const newUserMovies = userCards.filter(
          (card) => card._id !== movieDelId && card
        );
        setUserCards(newUserMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAuthRegister(nameUser, email, password) {
    auth
      .register(nameUser, email, password)
      .then((res) => {
        if (res.email) {
          /*onInfoTooltip('Вы успешно зарегистрировались!', 'ok')*/
          history.push("/sign-in");
          /*changeCurrUrl('/sign-in');*/
          return;
        }
        /*onInfoTooltip('Что-то пошло не так! Попробуйте ещё раз.', 'error')*/
        return res;
      })
      .catch((err) => {
        /*onInfoTooltip("Что-то пошло не так! Попробуйте ещё раз.", "error");*/
        console.log(err);
      });
  }

  function handleAuthLogin(email, password) {
    return auth.authorize(email, password).then((data) => {
      if (data) {
        handleLogin();
        history.push("/movies");
      }
    });
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function tokenCheck() {
    auth
      .getContent()
      .then((res) => {
        setLoggedIn(true);
        /*setUserEmail(res.email);*/
        setCurrentUser(res);
        history.push("/movies");
      })
      .catch((err) => console.log(err));
  }

  function signOut() {
    console.log("signOut");
    auth.logout();
    setLoggedIn(false);
    history.push("/sign-in");
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    handleGetUserMovies();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <HeaderNoAuth />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            loggedIn={loggedIn}
            component={() => (
              <>
                <Header />
                <Movies
                  cards={cards}
                  userCards={userCards}
                  runSearch={runSearch}
                  saveMovie={handleSaveMovie}
                  deleteUserMovie={handleDeleteUserMovie}
                />
                <Footer />
              </>
            )}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            loggedIn={loggedIn}
            component={() => (
              <>
                <Header />
                <SavedMovies
                  userCards={userCards}
                  deleteUserMovie={handleDeleteUserMovie}
                />
                <Footer />
              </>
            )}
          />
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={() => (
              <>
                <Header />
                <Profile signOut={signOut} updateUser={handleUpdateUser} />
              </>
            )}
          />
          <Route exact path="/sign-up">
            <Register authRegister={handleAuthRegister} />
          </Route>
          <Route exact path="/sign-in">
            <Login handleLogin={handleLogin} authLogin={handleAuthLogin} />
          </Route>
          <Route exact path="/*">
            <NotFoundPage />
          </Route>
        </Switch>
        <PopupMenu />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
