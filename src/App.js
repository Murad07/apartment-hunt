import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';

import MyRent from './components/DashBoard/MyRent/MyRent';
import BookingList from './components/DashBoard/BookingList/BookingList';
import AddHouse from './components/DashBoard/AddHouse/AddHouse';

import HouseDetails from './components/HouseDetails/HouseDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={{loggedInUser,setLoggedInUser}} className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/login"> 
            <Login></Login>
          </Route>
          <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/addHouse">
            <AddHouse></AddHouse>
          </PrivateRoute>

          <PrivateRoute path='/rent'>
            <MyRent></MyRent>
          </PrivateRoute>
          <Route path="/details/:id">
            <HouseDetails></HouseDetails>
          </Route>
          
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
