import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './homepage'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
