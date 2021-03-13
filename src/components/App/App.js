import { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';

import Preloader from '../Preloader/Preloader';
import HeaderNoAuth from '../HeaderNoAuth/HeaderNoAuth';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';

import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import * as auth from '../../utils/auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const history = useHistory();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const [shortCards, setShortCards] = useState([]);

  // стейт для сохранения последнего запроса на странице сохраненных фильмов
  const [inputFilterSearch, setInputFilterSearch] = useState('');
  // стейт для определения нажали ли кнопку поиска
  const [onSearch, setOnSearch] = useState(false);

  // Чтобы до проверки токена не рисовалась страница авторизации использую этот стейт:
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // стейт для режима короткометражек
  const [isShortMovie, setIsShortMovie] = useState(false);
  //стейт для установки кол-ва фильмов в зависимости от разрешения экрана
  const [countMoviesToPage, setCountMoviesToPage] = useState({
    current: 0,
    add: 0,
  });

  useEffect(() => {
    function handleResize() {
      const width = document.documentElement.clientWidth;

      setTimeout(() => {
        if (width > 850) {
          setCountMoviesToPage({ ...countMoviesToPage, current: 12, add: 3 });
        } else if (450 < width && width < 850) {
          setCountMoviesToPage({ ...countMoviesToPage, current: 8, add: 2 });
        } else {
          setCountMoviesToPage({ ...countMoviesToPage, current: 5, add: 2 });
        }
      }, 500);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  /*Был ли поиск. Нужно для определения что ставить на страницу: карточки или текст*/
  function handleSearchTrigger(onSearch) {
    setOnSearch(onSearch);
  }

  /*Обработчик кнопки Еще (добавляет фильмы)*/
  function handleCountMovies(currentCount) {
    setCountMoviesToPage({ ...countMoviesToPage, current: currentCount });
  }

  /*Обработчик включения-выключения фильтра (короткометражки)*/
  function handleOnFilter() {
    isShortMovie ? setIsShortMovie(false) : setIsShortMovie(true);
  }

  /*фильтрация по запросу*/
  function filtrationQuery(cards, inputSearch) {
    return cards.filter((card) => {
      if (card.nameRU.toLowerCase().includes(inputSearch)) {
        return card;
      }
    });
  }

  /*фильтрация по времени */
  function filtrationShort(cards) {
    return cards.filter((card) => (card.duration < 41 ? card : false));
  }

  /*Берем из localStorage, если там что то есть*/
  useEffect(() => {
    if (localStorage.getItem('prevMovies')) {
      const localCards = JSON.parse(localStorage.getItem('prevMovies'));
      setCards(localCards);
      const filterShortCards = filtrationShort(localCards);
      setShortCards(filterShortCards);
    }
  }, []);

  /*Поиск фильмов в beatfilm*/
  function runSearch(inputSearch) {
    setIsLoading(true);
    moviesApi
      .getAllCards()
      .then((allCards) => {
        const filterCards = filtrationQuery(allCards, inputSearch);
        setCards(filterCards);
        const filterShortCards = filtrationShort(filterCards);
        setShortCards(filterShortCards);
        localStorage.setItem('prevMovies', JSON.stringify(filterCards));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  /*Поиск среди сохраненных фильмов*/
  function runSearchSavedMovies(inputSearch) {
    setInputFilterSearch(inputSearch);
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

  useEffect(() => {
    handleGetUserMovies();
  }, []);

  // Сохранение юзером фильмов
  function handleSaveMovie(newMovie) {
    /*setIsLoading(true);*/
    mainApi
      .saveMovieToServer(newMovie)
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
        setOnSearch(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /*Обработчик регистрации*/
  function handleAuthRegister(nameUser, email, password) {
    auth
      .register(nameUser, email, password)
      .then((res) => {
        if (res.email) {
          handleAuthLogin(email, password);
          return;
        }
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /*Обработчик логина*/
  function handleAuthLogin(email, password) {
    return auth.authorize(email, password).then((data) => {
      if (data) {
        tokenCheck();
      }
    });
  }

  /*Обработчик авторизации*/
  function tokenCheck() {
    setIsTokenChecked(true);
    auth
      .getContent()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        handleGetUserMovies();
        location.pathname === '/sign-in' || location.pathname === '/sign-up'
          ? history.push('/movies')
          : history.push(location);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsTokenChecked(false);
      });
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  /*Обработчик выхода. Очищаю все стейты, чтобы при заходе
   в другой аккант не отображалась лишняя информация*/
  function signOut() {
    auth.logout();
    setLoggedIn(false);
    setCards([]);
    setUserCards([]);
    setInputFilterSearch('');
    setIsShortMovie(false);
    localStorage.removeItem('prevMovies');
    history.push('/');
  }

  return isTokenChecked ? (
    <div className="page page_preloader">
      <Preloader />
    </div>
  ) : (
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
                  cards={isShortMovie ? shortCards : cards}
                  userCards={userCards}
                  isLoading={isLoading}
                  countMoviesToPage={countMoviesToPage}
                  isShortMovie={isShortMovie}
                  onSearch={onSearch}
                  runSearch={runSearch}
                  saveMovie={handleSaveMovie}
                  deleteUserMovie={handleDeleteUserMovie}
                  handleCountMovies={handleCountMovies}
                  onFilter={handleOnFilter}
                  searchTrigger={handleSearchTrigger}
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
                  userCards={
                    inputFilterSearch && isShortMovie
                      ? filtrationQuery(
                          filtrationShort(userCards),
                          inputFilterSearch
                        )
                      : inputFilterSearch
                      ? filtrationQuery(userCards, inputFilterSearch)
                      : isShortMovie
                      ? filtrationShort(userCards)
                      : userCards
                  }
                  inputFilterSearch={inputFilterSearch}
                  onSearch={onSearch}
                  countMoviesToPage={countMoviesToPage}
                  isShortMovie={isShortMovie}
                  deleteUserMovie={handleDeleteUserMovie}
                  runSearchSavedMovies={runSearchSavedMovies}
                  searchTrigger={handleSearchTrigger}
                  handleCountMovies={handleCountMovies}
                  onFilter={handleOnFilter}
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
            <Login authLogin={handleAuthLogin} />
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
