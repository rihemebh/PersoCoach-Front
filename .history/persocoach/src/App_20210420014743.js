import logo from './logo.svg';
import './App.css';

import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
function App() {
  return (
 <Router>
    <Switch>
               
                 <Route path="/Coaches" exact="true" component={C}/>
                 
    </Switch>
 </Router>
  );
}

export default App;
