import logo from './logo.svg';
import './Styles/App.css';

import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import Catalog from './Catalogue/catalog';
function App() {
  return (
 <Router>
    <Switch>
        <Route path="/Coaches" exact="true" component={Catalog}/>
                 
    </Switch>
 </Router>
  );
}

export default App;
