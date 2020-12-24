import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddEvent from "./Components/AddEvent/AddEvent";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import RegisterList from "./Components/RegisterList/RegisterList";
import Review from "./Components/Review/Review";

export const Volunteering = createContext();

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const selectedMonth = monthNames[selectedDate.getMonth()];
  const regSelectedDate = {
    date: `${selectedDate.getDate()} ${selectedMonth}, ${selectedDate.getFullYear()}`,
  }
  const [volunteerInfo, setVolunteerInfo ] = useState({
    email: "",
    userName: "",
   ...regSelectedDate,
  });

  const [addEvent, setAddEvent] = useState({});
  return (
    <Volunteering.Provider value=
    {{volunteerInfo: [volunteerInfo, setVolunteerInfo ], 
      addEvent: [addEvent, setAddEvent]
    }}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/registerList">
            <RegisterList />
          </Route>
          <Route path="/addEvent">
            <AddEvent />
          </Route>
          <PrivateRoute path="/register">
              <Register />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </Volunteering.Provider>
  );
}

export default App;
