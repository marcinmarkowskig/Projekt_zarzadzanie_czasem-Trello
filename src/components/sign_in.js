import React, {Component} from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import { Field, reduxForm } from 'redux-form'; //ReduxForm
//import { Link } from 'react-router-dom';

class SignIn extends Component {
  renderField(field) {
    const { meta: { touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.signIn(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Email"
          name="email"
          component={this.renderField}
        />
        <Field
          label="Password"
          name="password"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Zaloguj</button>
      </form>
    );
  }

}

export default reduxForm({ // reduxForm było nazywane reduxForm helper
  form: 'SignInForm'//to może byc dowolna nazwa, ale nie może się powtarzac
})(
    connect(null,{ signIn })(SignIn)
);
