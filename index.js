import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox'
import store from "./createStore"
import { Provider } from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <CommentBox />
  </Provider>,
  document.getElementById('app')
);
