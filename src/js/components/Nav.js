import React from 'react';

class NavS extends React.Component {
  render(props) {
    return (
      <nav className="mainNav">
        <ul>
          <li eventKey={1}><a href="/">Home</a></li>
          <li eventKey={2}><a href="/accounts">Accounts</a></li>
          <li eventKey={3}><a href="/search">Search</a></li>
        </ul>
      </nav>
    )
  }
}

export default NavS;
