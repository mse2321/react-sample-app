import React, { Component } from 'react';
import { addArticleAction, removeArticleAction } from '../actions/index';
import { connect } from 'react-redux';

class ButtonDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayState: "in-active"
    };
    this.actionButton = this.actionButton.bind(this);
    this.addButton = this.addButton.bind(this);
    this.removeButton = this.removeButton.bind(this);
  }

  actionButton() {
    event.preventDefault();
    if(this.state.displayState == "in-active") {
      this.setState({
        displayState: "active"
      });
    } else {
      this.setState({
        displayState: "in-active"
      });
    }
  }

  addButton() {
    event.preventDefault();
    this.props.addArticle({ name: 'New Stuff', id: 2 });
  }

  removeButton() {
    event.preventDefault();
    this.props.removeArticle();
  }

  render() {
    return(
      <section className="buttonDisplay">
        <div className="row">
          <div className="col-md articleDisplay">
            <button onClick={ this.addButton }>Add</button>
            <button onClick={ this.removeButton }>Remove</button>
            <span>{ (this.props.articles.length ? this.props.articles.length : 0) + " articles" }</span>
          </div>
          <div className="col-md">
            <button onClick={ this.actionButton }>Status</button>
            <span>{ this.state.displayState }</span>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.myReducer.display,
    articles: state.myReducer.articles,
    search_results: state.myReducer.search_results
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addArticle: (props) => dispatch(addArticleAction(props)),
    removeArticle: () => dispatch(removeArticleAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDisplay);
