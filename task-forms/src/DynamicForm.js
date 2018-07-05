import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Col, Form, FormGroup, Button } from 'reactstrap';
import Field from './Field';
import * as validators from './validators';
import { FormService } from './Service';

const serviceForm = new FormService();
const usernameValidators = [validators.requireValidator, validators.usernameLengthValidator];
const passwordValidators = [validators.requireValidator, validators.passwordLowerCaseValidator, validators.passwordUpperCaseValidator, validators.passwordNumberValidator, validators.passwordLengthValidator];
const dateValidators = [validators.dateFormatValidator];

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    serviceForm.add('username', {type: 'text', value: '', validators: usernameValidators, className: 'some className', errors: [], dirty: false, focused: false, label: 'Username'});
    serviceForm.add('password', {type: 'password', value: '', validators: passwordValidators, className: 'some className', errors: [], dirty: false, focused: false, label: 'Password'});
    serviceForm.add('confirmPassword', {type: 'password', value: '', validators: passwordValidators, className: 'some className', errors: [], dirty: false, focused: false, label: 'Confirm Password'});
    serviceForm.add('dateOfBirth', {type: 'text', value: '', validators: dateValidators, className: 'some className', errors: [], dirty: false, focused: false, label: 'Date of birth'});
  }

  

  handleFocus = (name) => {
    serviceForm.onFocus(name)
    this.forceUpdate();
  };

  handleChange = (name, value) => {
    serviceForm.onChange(name, value);
    this.forceUpdate();
  };

  handleBlur = (name) => {
    serviceForm.onBlur(name);
    this.forceUpdate();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    serviceForm.onSubmit();
    this.forceUpdate();
  };
  

  render() {
    const formFields = [];
    Object.entries(serviceForm.getFields()).forEach(([name, options], index) => {
      const field = <Field
            key={index}
            type={options.type}
            label={options.label}
            name={name}
            data={options}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          formFields.push(field);   
    });

    return (
      <div className="container form-margin">
      <Form onSubmit={this.handleSubmit}>
        {formFields}
        <FormGroup row>
            <Col xs={6} className="mx-auto">
              <Button
                color="success"
                size="md"
                className="mx-auto btn-width"
              >
              Click me</Button>
          </Col>
        </FormGroup>
        </Form>
      </div>
    );
  }

}

export default DynamicForm;