import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notfound from './Pages/Notfound/Notfound';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login';
import Header from './Pages/Home/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Aboutus from './Pages/Aboutus/Aboutus';
import Experts from './Pages/Experts/Experts/Experts';
import Footer from './Pages/Home/Footer/Footer';
import Confirm from './Pages/Confirm/Confirm';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <Aboutus></Aboutus>
            </Route>
            <PrivateRoute path='/experts'>
              <Experts></Experts>
            </PrivateRoute>
            <PrivateRoute path='/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/confirm'>
              <Confirm></Confirm>
            </Route>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
