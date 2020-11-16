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


function App() {
  return (
    <div className="App">
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
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/addHouse">
            <AddHouse></AddHouse>
          </Route>

          <Route path='/rent'>
            <MyRent></MyRent>
          </Route>
          <Route path="/details/:id">
            <HouseDetails></HouseDetails>
          </Route>
          
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
