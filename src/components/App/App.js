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

function App() {
    return (
        <div className="page" >
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/movies">
                    <Header />
                    <Movies />
                </Route>
                <Route exact path="/saved-movies">
                    <Header />
                    <SavedMovies />
                </Route>
                <Route exact path="/profile">
                    <Header />
                    <Profile />
                </Route>
                <Route exact path="/sign-up">
                    <Register />
                </Route>
                {/*<Route exact path="/sign-in">
                    <Login />
    </Route>*/}
            </Switch >

            <Footer />
        </div>
    );

}

export default App;
