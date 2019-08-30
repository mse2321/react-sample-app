import React, { Component } from 'react';
import { hideModalAction } from "../actions/index";
import { connect } from 'react-redux';

class Modal extends React.Component {

  modalClose(e) {
    event.preventDefault();
    this.props.hideModal();
  }

  render() {
    return (
      <div className={this.props.view}>
        <div className="modal_button_container"><button className="modalCloseButton" onClick={ this.modalClose.bind(this) } >X</button></div>
        <p>{this.props.message}</p>
      </div>
    );
  }
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
    hideModal: () => dispatch(hideModalAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
