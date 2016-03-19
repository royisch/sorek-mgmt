import ReactDOM from 'react-dom'
import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import FormView from './../components/FormView'
import { connect, Provider } from 'react-redux'
import classnames from 'classnames'
import { bindActionCreators } from 'redux'
import _ from 'underscore'
import { testChanged } from '../actions/listViewActions.js'

function mapStateToProps(state) {
  const { mainViewReducer } = state;
  return mainViewReducer;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    testChanged: testChanged
  }, dispatch);
}

let loginView = React.createClass({

  clicked: function() {
    this.props.testChanged('button clicked');
  },


  submitted: function() {
    this.props.testChanged('button clicked');
  },

  render: function() {
    return (
    <div class="login-screen">
      <a href="/auth/google" ><button id="googleplus">Sign in with Google</button></a>
    </div>

    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(loginView);
