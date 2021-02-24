import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
    return (
        <div className="page" >
            <Switch>
                <Route exact path="/">
                    <Main />
                    <Footer />
                </Route>
                <Route exact path="/movies">
                    <Header />
                    <Movies />
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
            </Switch >
        </div>
    );

}

export default App;
