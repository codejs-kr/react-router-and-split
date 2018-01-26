import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Menu } from 'components';
// import { Home, About, Page } from 'pages';
import { Home, About, Page } from 'pages/index.async';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home}/>
        <Route path="/page" component={Page}/>
        <Route path="/about" component={About}/>
        <Route path="/about/:name" component={About}/>
      </div>
    );
  }
}

export default App;