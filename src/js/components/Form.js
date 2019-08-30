import React, { Component } from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayModalAction } from '../actions/index';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customerName: "",
      numberOfGuests: 0,
      textMessage: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
  }
  handleText(e) {
    this.setState({ textMessage: e.target.value });
  }

  handleInput(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    event.preventDefault();
    this.props.showModal();
    return this.props.display;
  }

  render(display) {
    return (
      <div>
        <form className="sampleForm" onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" name="customerName" placeholder="Who's coming?"
            value={ this.state.customerName } onChange={ this.handleInput.bind(this) } />
          </div>
          <div className="form-group">
            <label>Number of Guests:</label>
            <input type="number" className="form-control" name="numberOfGuests"
             value={ this.state.numberOfGuests } onChange={ this.handleInput.bind(this) } />
          </div>
          <div className="form-group">
            <label>Type a message:</label>
            <textarea className="form-control" placeholder="Type in something!" value={ this.state.textMessage } onChange={ this.handleText } />
          </div>
          <button type="submit">Submit</button>
        </form>
        <Modal view={ "modal " + this.props.display } message={ this.state.customerName + " is coming to the party with " +
          this.state.numberOfGuests + " guests and said this - " + this.state.textMessage + "."} />
      </div>
    )
  }
}

Form.propTypes = {
  customerName: PropTypes.string.isRequired,
  numberOfGuests: PropTypes.number.isRequired,
  textMessage: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    display: state.myReducer.display,
    articles: state.myReducer.articles,
    search_results: state.myReducer.search_results
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch(displayModalAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
