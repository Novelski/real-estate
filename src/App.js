import './App.css';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

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
  
  <Router><Navbar/>
  <Switch>
    <Route path='/' exact component={UserManagement}/>
    <Route path='/franchise' component={Franchise}/>
    <Route path='/state' component={State}/>
    <Route path='/city' component={City}/>
    <Route path='/zone' component={Zone}/>
    <Route path='/pincode' component={Pincode}/>
    <Route path='/settings' component={Settings}/>
    <Route path='/property' component={Property}/>
    <Route path='/adminuser' component={AdminUser}/>
    <Route path='/enduser' component={EndUser}/>
    <Route path='/order' component={BookingList}/>
    <Route path='/report' component={Report}/>
    </Switch>
    </Router>
</>
  );
}

export default App;