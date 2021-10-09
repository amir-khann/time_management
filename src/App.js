
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import LogInForm from './components/common/loginForm/LogInForm';
import ManagerSignUp from './components/managerSignUpForm/ManagerSignUp';
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path='/signup' exact component={ManagerSignUp} />
      <Route path='/signin' exact component={LogInForm} />
      <Route path='/' exact component={Home} />
      </Switch>
      </Router>

    </div>
  );
}

export default App;





