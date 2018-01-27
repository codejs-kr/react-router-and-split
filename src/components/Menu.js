import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const style = {
    color: 'green',
    fontSize: '1.5rem'
  };

  return (
    <div>
      <ul>
        <li><NavLink exact to="/" activeStyle={style} activeClassName="active">Home</NavLink></li>
        <li><NavLink exact to="/page" activeStyle={style}>Page</NavLink></li>
        <li><NavLink exact to="/about" activeStyle={style}>About</NavLink></li>
        <li><NavLink to="/about/foo" activeStyle={style}>About Foo</NavLink></li>
        <li><NavLink to="/posts" activeStyle={style}>Posts</NavLink></li>
      </ul>
      <hr/>
    </div>
  );
};

export default Menu;