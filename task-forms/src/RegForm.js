import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Col, Form, FormGroup, Button } from 'reactstrap';
import Field from './Field';
import * as validators from './validators';

class RegForm extends PureComponent {
  constructor(props) {
    super(props);
    const fields = {
      username: {
        value: '',
        errors: [],
        validators: [
          validators.requireValidator,
          validators.minLengthValidator(10),
        ],
        dirty: false,
        focused: false,
      },
      password: {
        value: '',
        errors: [],
        validators: [
          validators.requireValidator,
          validators.passwordLowerCaseValidator,
          validators.passwordUpperCaseValidator,
          validators.passwordNumberValidator,
          validators.passwordLengthValidator,
        ],
        dirty: false,
        focused: false,
      },
      confirmPassword: {
        value: '',
        errors: [],
        validators: [
          validators.requireValidator,
          validators.passwordLowerCaseValidator,
          validators.passwordUpperCaseValidator,
          validators.passwordNumberValidator,
          validators.passwordLengthValidator,
        ],
        dirty: false,
        focused: false,
      },
      dateOfBirth: {
        value: '',
        errors: [],
        validators: [
          validators.dateFormatValidator,
        ],
        dirty: false,
        focused: false,
      },
    };
    this.state = this.validateFields(fields);
  }

  validateForm = (fields) => {
    const { password, confirmPassword } = fields;
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
    const field = { ...this.state[name] };
    field.dirty = true;
    field.focused = true;
    this.setState({ [name]: field });
  };

  handleChange = (name, value) => {
    const field = { ...this.state[name] };
    field.value = value;
    const fields = this.validateFields({ ...this.state, [name]: field });
    this.validateForm(fields);
    this.setState(fields);
  };

  handleBlur = name => {
    const field = { ...this.state[name] };
    field.focused = false;
    this.setState({ [name]: field });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid(this.state)) {
      console.log('The form was sent');
    }
  };

  render() {
    const { username, password, confirmPassword, dateOfBirth } = this.state;
    return (
      <div className="container form-margin">
        <Form onSubmit={this.handleSubmit}>
          <Field
            type="text"
            label="Username"
            name="username"
            value={username.value}
            data={username}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <Field
            type="password"
            label="Username"
            name="password"
            value={password.value}
            data={password}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <Field
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword.value}
            data={confirmPassword}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <Field
            type="text"
            label="DOB"
            name="dateOfBirth"
            value={dateOfBirth.value}
            data={dateOfBirth}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
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

export default RegForm;
