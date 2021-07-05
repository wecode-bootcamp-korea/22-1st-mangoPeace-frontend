import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Detail from './pages/Detail/Detail';
import BestList from './pages/Main/BestList';
import Main from './pages/Main/Main';
import SearchResult from './pages/SearchResult/SearchResult';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/SearchResult" component={SearchResult} />
          <Route exact path="/BestList:id" component={BestList} />
          <Route exact path="/Detail/:id" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
