import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Col, Form, FormGroup, Button } from 'reactstrap';
import Field from './Field';
import * as validators from './validators';
import { FormService } from './Service';

const serviceForm = new FormService();
let usernameValidators = [validators.requireValidator, validators.usernameLengthValidator];
let passwordValidators = [validators.requireValidator, validators.passwordLowerCaseValidator, validators.passwordUpperCaseValidator, validators.passwordNumberValidator, validators.passwordLengthValidator];
let dateValidators = [validators.dateFormatValidator];

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.allFields = {};
    serviceForm.add('username', {type: 'text', value: '', validators: usernameValidators, className: 'some className', errors: [], dirty: false, focused: false, label: 'Username'});
    serviceForm.add('password', {type: 'password', value: '', validators: passwordValidators, className: 'some className', errors: [], dirty: false, focused: false, label: 'Password'});
    serviceForm.add('confirmPassword', {type: 'password', value: '', validators: passwordValidators, className: 'some className', errors: [], dirty: false, focused: false, label: 'Confirm Password'});
    serviceForm.add('dateOfBirth', {type: 'text', value: '', validators: dateValidators, className: 'some className', errors: [], dirty: false, focused: false, label: 'Date of birth'});
    console.log(serviceForm);
  }

  validateForm = (fields = serviceForm.allFields) => {
    const { password, confirmPassword } = fields;
    if(this.isValid({password, confirmPassword})) {
      if(password.value !== confirmPassword.value){
        const confirmPass = {...fields.confirmPassword};
        confirmPass.errors.push("Passoword and confirm password must be the equil");
        fields.confirmPassword = {...confirmPass};  
      }
    }
    return fields;
  };

  validateFields(fields) {
    Object.entries(fields).forEach(([name, field]) => {
      const { value, validators = [] } = field;
      field.errors = validators
        .map(validator => {
          return validator(value);
        })
        .filter((error) => {
          return error;
        });
    });
    return fields;
  }

  isValid(fields) {
    return Object.entries(fields).every(([_, field]) => {
      return !field.errors.length;
    });
  }

  handleFocus = (name) => {
    const field = {...serviceForm.allFields[name]};
    field.dirty = true;
    field.focused = true;
    serviceForm.allFields[name] = {...field};
    serviceForm.allFields = this.validateFields(serviceForm.allFields);
    this.validateForm(serviceForm.allFields);
    this.forceUpdate();
  };

  handleChange = (name, value) => {
    const field = { ...serviceForm.allFields[name] };
    field.value = value;
    const fields = this.validateFields({ ...serviceForm.allFields, [name]: field });
    serviceForm.update(name, value);
    this.validateForm(fields);
    this.forceUpdate();
  };

  handleBlur = name => {
    const field = {...serviceForm.allFields[name]};
    field.focused = false;
    serviceForm.allFields[name] = {...field };
    serviceForm.allFields = this.validateFields(serviceForm.allFields);
    this.validateForm(serviceForm.allFields);
    this.forceUpdate();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const fields = {};
    Object.entries(serviceForm.allFields).forEach(([name]) => {
      const field = {...serviceForm.allFields[name]};
      field.dirty = true;
      fields[name] = field;
    });
    serviceForm.allFields = this.validateFields(fields);
    this.forceUpdate();
    if (this.isValid(serviceForm.allFields)) {
      console.log('The form was sent');
    }
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