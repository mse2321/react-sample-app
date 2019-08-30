import React, { Component } from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentYear: String((new Date()).getFullYear())};
  }

  render() {
    return (
      <footer>&copy; {this.state.currentYear} MassMutual</footer>
    )
  }
}

export default Footer;
