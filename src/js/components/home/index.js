import React, { Component } from 'react';
import Form from '../Form';
import ApiContent from '../../api/ApiContent';
import ButtonDisplay from '../ButtonDisplay';

class Home extends React.Component {

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const numberList = numbers.map((number) => <li key={ number.toString() }>{ number }</li>);

    return (
      <div>
        <ButtonDisplay />
        <section className="row">
          <div className="col-md">
            <p>Testing sample message.</p>
            <p>{ numberList }</p>
          <Form />
          </div>
          <div className="col-md">
            <ApiContent />
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
