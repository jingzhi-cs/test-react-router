import './App.css';
import Nav from './Nav';
import About from './About';
import Weather from './Weather';
import WeatherDetail from './WeatherDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Weather" exact component={Weather} />
          <Route path="/Weather/:id" component={WeatherDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
