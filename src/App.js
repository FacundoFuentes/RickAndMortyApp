import './App.css';
import NavBar from './components/NavBar.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Services from './components/pages/Services.jsx';
import Home from './components/pages/Home.jsx';
import SignUp from './components/pages/SignUp.jsx';
import Products from './components/pages/Products.jsx';
import SingleCharacter from './components/pages/SingleCharacter.jsx'

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact component={Home} path='/'/>
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/single-character' component={SingleCharacter} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
