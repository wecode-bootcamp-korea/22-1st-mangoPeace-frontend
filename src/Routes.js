import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import BestList from './pages/BestList/BestList';
import Main from './pages/Main/Main';
import SearchResult from './pages/SearchResult/SearchResult';
import Footer from './components/Footer';
import Filter from './pages/Filter/Filter';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/searchresult" component={SearchResult} />
          <Route exact path="/bestlist/:id" component={BestList} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route eaxct path="/filter" component={Filter} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
