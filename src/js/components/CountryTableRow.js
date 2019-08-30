import React, { Component } from 'react';

class CountryTableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{ this.props.country_name }</td>
      </tr>
    )
  }
}

export default CountryTableRow;
