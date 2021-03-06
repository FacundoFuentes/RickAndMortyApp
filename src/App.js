import './App.css';
import NavBar from './components/NavBar.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Services from './components/pages/Services.jsx';
import Home from './components/pages/Home.jsx';
import Trailer from './components/pages/Trailer.jsx';
import AboutMe from './components/pages/AboutMe.jsx';
import SingleCharacter from './components/pages/SingleCharacter.jsx'

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact component={Home} path='/'/>
        <Route path='/services' component={Services} />
        <Route path='/about' component={AboutMe} />
        <Route path='/trailer' component={Trailer} />
        <Route path='/single-character' component={SingleCharacter} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
