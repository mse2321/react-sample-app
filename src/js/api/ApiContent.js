import React, { Component } from 'react';
import axios from 'axios';
import CountryTableRow from '../components/CountryTableRow';

class ApiContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = "";
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        const countryData = res.data;
        const numberOfCountries = countryData.length;
        var countryNames = [];

        for(var i = 0; i < numberOfCountries; i++){
          const numberCheck = typeof i;

          if(numberCheck == "number" && i < 251){
            countryNames.push( countryData[i].name.toString() );
            const countryNameList = countryNames.map((countryName) => <CountryTableRow key={ countryName } country_name={ countryName } />);
            this.setState({ countryNameList })
          }
        }

      })
      .catch(error=>{console.log('Error: '+error)})
  }

  render() {
    return (
      <section className="apiContent">
        <table>
          <tr className="HeadingRow">
            <th>Here is a list of countries:</th>
          </tr>
          { this.state.countryNameList }
        </table>
      </section>
    )
  }
}

export default ApiContent;
