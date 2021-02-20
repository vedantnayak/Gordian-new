import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login.js';
import Menu from './menu.js';
import Admin from './admin.js';

function App() {
  return(
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/menu" component={Menu} /> 
          <Route exact path="/admin" component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
