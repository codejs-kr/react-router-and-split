import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Menu } from 'components';
// import { Home, About, Page, Posts } from 'pages';
import { Home, About, Page, Posts } from 'pages/index.async';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React router, react-hot-loader, code split</h1>
        <Menu />
        <Route exact path="/" component={Home}/>
        <Route exact path="/page" component={Page}/>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/about/:name" component={About}/>
        </Switch>
        <Route path="/posts" component={Posts}/>
      </div>
    );
  }
}

export default App;