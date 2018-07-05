import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Button } from 'reactstrap';
import { Form } from 'react-final-form'
import * as validators from './validators';
import FieldWrapper from './FieldWrapper';


const usernameValidators = [validators.requireValidator, validators.usernameLengthValidator];
const passwordValidators = [validators.requireValidator, validators.passwordLowerCaseValidator, validators.passwordUpperCaseValidator, validators.passwordNumberValidator, validators.passwordLengthValidator];
const dateValidators = [validators.dateFormatValidator];

class FinalForm extends Component {

  onSubmit = () => {};

  validateUsernane = (value) => {
    const errors = [];
    usernameValidators.forEach((validator) => {
      if (validator(value)) { errors.push(validator(value)) }
    })
    return errors.length > 0 ? errors.join(',') : undefined;
  }

  validatePassword = (value) => {
    const errors = [];
    passwordValidators.forEach((validator) => {
      if (validator(value)) { errors.push(validator(value)) }
    })
    return errors.length > 0 ? errors.join(',') : undefined;
  }

  validateConfirm = (value, allValues) => {
    const errors = [];
    passwordValidators.forEach((validator) => {
      if (validator(value)) { errors.push(validator(value)) }
    })
    if (errors.length === 0 && allValues.password !== allValues.confirm && !this.validatePassword(allValues.password))
      return 'Password and confirm password Must be the same';
    else
      return errors.length > 0 ? errors.join(',') : undefined;
  }

  validateDate = (value) => {
    const errors = [];
    dateValidators.forEach((validator) => {
      if (validator(value)) { errors.push(validator(value)) }
    })
    return errors.length > 0 ? errors.join(',') : undefined;
  }

  render() {
    return (
      <div className="container">
        <div className="nameHolder">
          <h1>
            <span aria-label="God damn" role="img">🤪</span>Промучився<span aria-label="God damn" role="img">🤪</span>
          </h1>
        </div>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit} >
              <FieldWrapper
                name="username"
                validatorFunc={this.validateUsernane}
                type="text"
                placeholder="Enter username..."
                label="Username"
              />
              <FieldWrapper
                name="password"
                validatorFunc={this.validatePassword}
                type="password"
                placeholder="Enter password..."
                label="Password"
              />
              <FieldWrapper
                name="confirm"
                validatorFunc={this.validateConfirm}
                type="password"
                placeholder="Enter confirm passord..."
                label="Confirm password"
              />
              <FieldWrapper
                name="date"
                validatorFunc={this.validateDate}
                type="text"
                placeholder="Enter date of birth..."
                label="Date of birth"
              />
              <div className="buttons">
                <Button type="submit" className="btn-width" color="success">
                  Submit
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    )
  }
}

export default FinalForm;
