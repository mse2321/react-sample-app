import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class Search extends React.Component {
  render() {
    return (
      <div>
        <section className="row">
          <div className="col-lg-12">
            <h2>Search</h2>
            <SearchBar />
            <SearchResults />
          </div>
        </section>
      </div>
    )
  }
}

export default Search;
