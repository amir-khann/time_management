
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LogInForm from './components/common/loginForm/LogInForm';
import ManagerSignUp from './components/managerSignUpForm/ManagerSignUp';
import Home from './pages/home';
import Navbar from './components/navBar/Navbar'
import UserEdit from "./components/userEdit/UserEdit";
import UserSignup from "./components/userSignUpForm/UserSignup";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route path='/signup' component={ManagerSignUp} />
      <Route path='/signin'  component={LogInForm} />
      <Route path='/createuser'  component={UserSignup} />
      <Route path='/useredit'  component={UserEdit} />
      <Route path='/' exact component={Home} />

      </Switch>
      </Router>

    </div>
  );
}

export default App;





