import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowUSer from './Components/ShowUSer';
import UserDetail from './Components/UserDetail';
import EditUser from './Components/EditUser';
import RequestForm from './Components/RequestForm';
import { ToastContainer } from 'react-toastify';
import NewTravelRequest from './Components/NewTravelRequest';
import AppNavbar from './Components/AppNavabar';


function App() {
  const Users = {
    Admin: "admin",
    Employee: "employee",
    Manager: "manager"
  }

  const currUser = Users.Admin;
  return (
    <div className="App">
      {/* <h1>Travel App</h1> */}
      <BrowserRouter>

        <ToastContainer />
        <Routes>
          {/* <Route path='/' element={<Login />}></Route>
          <Route path='/user' element={
            <>
              <AppNavbar currUser={currUser} />
              <Routes>
                <Route path='appnavbar' element={<AppNavbar />}></Route>
                <Route path='showuser' element={<ShowUSer currUser={currUser} />}></Route>
                <Route path='create' element={<Registration />}></Route>
                <Route path="detail/:userid" element={<UserDetail />}> </Route>
                <Route path='edit/:userid' element={<EditUser />}></Route>
              </Routes>
            </>
          }>
          </Route> */}

        </Routes>
        <AppNavbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
