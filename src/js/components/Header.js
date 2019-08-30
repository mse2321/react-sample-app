import React, { Component } from 'react';
import NavS from './Nav';

class Header extends React.Component {

  render() {
    return(
      <header>
        <h1>{ this.props.heading }</h1>
        <NavS />
      </header>
    )
  }
}

export default Header;
