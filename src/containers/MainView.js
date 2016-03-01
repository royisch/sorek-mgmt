import ReactDOM from 'react-dom'
import React from 'react'
import { connect, Provider } from 'react-redux'
import storeFactory from '../store/store.js'
import ListView from '../components/ListView.js'

var store = storeFactory();

export default React.createClass({

  render() {
    return (
      <Provider store={store}>
        <ListView/>
      </Provider>
    )
  }
});
