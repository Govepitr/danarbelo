import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/index';
import NavBar from './components/NavBar/index';
import Home from './components/Home/index';
import Footer from './components/Footer/index';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>  
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
