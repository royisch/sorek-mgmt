import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import {Row, Col, Input, Button} from 'react-bootstrap'


const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  return errors;
};

class ContactForm extends Component {
  render() {
    const { fields: {username, email, age}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(function() {debugger;})}>

        <Row className="form-group">
          <Col xs={12} sm={6}>
            <Input type="text" label="User Name" placeholder="Enter text" {...username}/>
          </Col>
          {username.touched && username.error && <label className="error">{username.error}</label>}
        </Row>

        <Row className="form-group">
          <Col xs={12} sm={6}>
            <Input type="text" label="Email" placeholder="Enter text" {...email}/>
          </Col>
          {email.touched && email.error && <div>{email.error}</div>}
        </Row>

        <Row className="form-group">
          <Col xs={12} sm={6}>
            <Input type="text" label="Age" placeholder="Enter text" {...age}/>
          </Col>
          {age.touched && age.error && <div>{age.error}</div>}
        </Row>
        <Button bgStyle="primary" onClick={handleSubmit}>Submit</Button>
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: 'contact',                      // the name of your form and the key to
                                        // where your form's state will be mounted
  fields: ['username', 'email', 'age'],  // a list of all your fields in your form,
  validate
})(ContactForm);

export default ContactForm;
