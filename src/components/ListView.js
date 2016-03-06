import ReactDOM from 'react-dom'
import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import FormView from './FormView'
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

let listView = React.createClass({

  clicked: function() {
    this.props.testChanged('button clicked');
  },


  submitted: function() {
    this.props.testChanged('button clicked');
  },

  render: function() {
    return (
        <Row>
          <Col xs={12}>
            Test Action
          </Col>
          <Col xs={12}>
            <Button onClick={this.clicked}>CLICK ME</Button>
            <FormView onSubmit={this.submitted}></FormView>
          </Col>
        </Row>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(listView);
