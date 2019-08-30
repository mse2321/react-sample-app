import * as actions from "../actions/actionTypes";
import { combineReducers } from 'redux'

const initialState = {
  display: "displayNone",
  articles: [],
  search_results: []
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] }
    case actions.REMOVE_ARTICLE:
      return { ...state, articles: state.articles.slice(1) }
    case actions.HIDE_MODAL:
        return { ...state, display: "displayNone" }
    case actions.SHOW_MODAL:
        return { ...state, display: "displayBlock" }
    case actions.EXECUTE_SEARCH:
        return {...state, search_results: [...state.search_results, action.payload] }
    default:
      return state;
  }
};

const rootReducer = combineReducers({myReducer})

export default rootReducer;
