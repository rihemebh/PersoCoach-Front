import logo from './logo.svg';
import './App.css';

import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
function App() {
  return (
 <Router>
    <Switch>
               <Route path="/" exact="true" component={Home}/>
                 <Route path="/Coaches" exact="true" component={Category}/>
                 
    </Switch>
 </Router>
  );
}

export default App;
