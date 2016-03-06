import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

class ContactForm extends Component {
  render() {
    const { fields: {name, address, phone}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(function() {debugger;})}>
        <label>Name</label>
        <input type="text" {...name}/>
        {name.error && name.touched && <div>{name.error}</div>}

        <label>Address</label>
        <input type="text" {...address} />
        {address.error && address.touched && <div>{address.error}</div>}

        <label>Phone</label>
        <input type="text" {...phone}/>
        {phone.error && phone.touched && <div>{phone.error}</div>}

        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: 'contact',                      // the name of your form and the key to
                                        // where your form's state will be mounted
  fields: ['name', 'address', 'phone']  // a list of all your fields in your form
})(ContactForm);

export default ContactForm;
