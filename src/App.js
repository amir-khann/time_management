
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LogInForm from './components/common/loginForm/LogInForm';
import ManagerSignUp from './components/managerSignUpForm/ManagerSignUp';
import Home from './pages/home';
import Navbar from './components/navBar/Navbar'
import './App.css';
import NormalUser from "./components/normaluserSignUpForm/NormalUser";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route path='/signup' exact component={ManagerSignUp} />
      <Route path='/signin' exact component={LogInForm} />
      <Route path='/createuser' exact component={NormalUser} />
      <Route path='/' exact component={Home} />

      </Switch>
      </Router>

    </div>
  );
}

export default App;





