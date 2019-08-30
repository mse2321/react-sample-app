import React, { Component } from 'react';
import Header from './Header';
import Accounts from './accounts/Accounts';
import Footer from './Footer';
import Home from './home/index';
import Search from './search/index';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return(
      <div>
        <div className={ "container-fluid backgroundDisabled " + (this.props.display ? this.props.display : "displayNone") }></div>
        <Header heading="Test Application" />
        <BrowserRouter>
          <div className="container-fluid">
            <Route exact={true} path="/" component={Home} />
            <Route path="/accounts" component={Accounts} />
            <Route path="/search" component={Search} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
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

export default connect(mapStateToProps)(App);
