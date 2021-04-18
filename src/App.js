import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import UserInfoDetail from './components/UserInfoDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { DataProvider } from "./DataContext"


function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={() => <Home />} />
          <Route path='/details/:id/:name' exact component={() => <UserInfoDetail />} />
        </Switch>
      </Router>
    </DataProvider>

  );
}

export default App;
