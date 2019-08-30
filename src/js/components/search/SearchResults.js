import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="searchResults">
        <ul>{ this.props.search_results }</ul>
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

export default connect(mapStateToProps)(SearchResults);
