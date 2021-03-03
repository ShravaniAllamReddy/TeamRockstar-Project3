import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import useAuth from './hooks/auth';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CreateActivity from './pages/CreateActivity';
import ActivityDetails from './components/ActivityResult';
import SavedActivities from './pages/SavedActivities';
import Votes from './pages/Votes';


function App() {
    // Pull auth token from storage, in case you refresh the page
    const { getToken, logout } = useAuth();
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

    // A nice trick that if we EVER get back a 401, will pop the token off
    axios.interceptors.response.use(
        (response) => {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        },
        (error) => {
            const { message } = error.toJSON();
            // If we had time, we could write our own custom method to the auth middleware
            // However, we are just gonna use their message.
            if (message === 'Request failed with status code 401') {
                logout();
            }
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        }
    );

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/createactivity">
                    <CreateActivity />
                </Route>
                <Route path="/votes">
                    <Votes />
                </Route>
                <Route exact path="/activities/:id">
                    <ActivityDetails />
                </Route>
                <Route path="/savedactivities">
                    <SavedActivities />
                </Route>

            </Switch>
        </Router >
    );
}

//Yanked straight from the react-router docs for redirects
// function PrivateRoute({ children, ...rest }) {
//     const { isLoggedIn } = useAuth();
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 isLoggedIn() ? (
//                     children
//                 ) :
//                     (
//                         <Redirect
//                             to={{
//                                 pathname: '/login',
//                                 state: { from: location }
//                             }}
//                         />
//                     )
//             }
//         />
//     );
// }

export default App;
