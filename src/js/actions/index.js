import * as actions from "./actionTypes";

export const addArticleAction = article => ({
  type: actions.ADD_ARTICLE,
  payload: article
});

export const removeArticleAction = () => ({
  type: actions.REMOVE_ARTICLE
});

export const hideModalAction = () => ({
  type: actions.HIDE_MODAL
});

export const displayModalAction = () => ({
  type: actions.SHOW_MODAL
});

export const runSearchAction = search_results => ({
  type: actions.EXECUTE_SEARCH,
  payload: search_results
});
