import Headers from './components/header/header';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Dash from './components/dashboard/component1/dscomp/dscomp';
import Employee from './components/dashboard/component1/employee/employee';
import Profile from './components/dashboard/component1/profile/profile';
function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Headers></Headers>}/>
    <Route path='/dashboard' element={<Dashboard></Dashboard>}>
      <Route path='' element={<Dash></Dash>}></Route>
      <Route path='manage' element={<Employee></Employee>}></Route>
      <Route path='profile' element={<Profile></Profile>}></Route>
    </Route>
   </Routes>
   </>
  );
}

export default App;
