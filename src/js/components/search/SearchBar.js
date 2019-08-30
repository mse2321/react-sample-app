import React, { Component } from 'react';
import { connect } from 'react-redux';
import { runSearchAction } from '../../actions/index';
import axios from 'axios';
//import { FaBeer } from 'react-icons/fa';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ""
    };
  }

  handleSearchTerm(e) {
    var term = e.target.value;
    return this.setState({ searchTerm: term });
  }

  handleSearch(e) {
    event.preventDefault();
      const TOP_STORY_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
      const params = {params: {'api-key': "3f1f7f6973744c09b710a675f13068eb", 'q': this.state.searchTerm }};

      axios.get(TOP_STORY_URL, params)
        .then(res => {
          var api_results = res.data.response.docs;
          //this.props.runSearch(res.data);
          //return this.props.runSearch(res.data.results);
          console.log(api_results);
          const results = api_results.map(
            (api_result) => <li>
              <a href={api_result.web_url} title={api_result.snippet}>
              <img src={"https://www.nytimes.com/" + api_result.multimedia[2].url} alt={api_result.headline.main} />{ api_result.headline.main }</a>
            </li>
          );
          //console.log(results);
          return this.props.runSearch(results);

        })
        .catch(error=>{console.log('Error: '+error)})
  }

  render() {
    return (
      <div>
        <form className="searchForm" onSubmit={ this.handleSearch.bind(this) }>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" name="search" placeholder="Search for something!"
            value={ this.state.searchTerm } onChange={ this.handleSearchTerm.bind(this) } />
          </div>
          <button type="submit">Search</button>
        </form>
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    runSearch: (props) => dispatch(runSearchAction(props))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
