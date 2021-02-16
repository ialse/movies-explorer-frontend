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
            <Header />
            <Switch>
                <Route path="/">
                    <Main />
                </Route>
                {/*<Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/saved-movies">
                    <SavedMovies />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/sign-up">
                    <Register />
                </Route>
                <Route path="/sign-in">
                    <Login />
    </Route>*/}
            </Switch >

            <Footer />
        </div>
    );

}

export default App;
