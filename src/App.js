import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import AdminUser from './Components/AdminUser/AdminUser';
import BookingList from './Components/Booking list/BookingList';
import City from './Components/City/City';
import EndUser from './Components/EndUser/EndUser'
import Franchise from './Components/Franchise/Franchise'
import Navbar from './Components/Dashboard/Navbar';
import Pincode from './Components/Pincode/Pincode';
import Property from './Components/Property/Property'
import Report from './Components/Report/Report';
import Settings from './Components/Settings/Settings';
import State from './Components/States/State'
import UserManagement from './Components/User-Management/UserManagement';
import Zone from './Components/Zones/Zone';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route component={UserManagement} exact path='/' />
          <Route component={Franchise} path='/franchise' />
          <Route component={State} path='/state' />
          <Route component={City} path='/city' />
          <Route component={Zone} path='/zone' />
          <Route component={Pincode} path='/pincode' />
          <Route component={Settings} path='/settings' />
          <Route component={Property} path='/property' />
          <Route component={AdminUser} path='/adminuser' />
          <Route component={EndUser} path='/enduser' />
          <Route component={BookingList} path='/order' />
          <Route component={Report} path='/report' />
        </Switch>
      </Router>
    </>
  );
}

export default App;