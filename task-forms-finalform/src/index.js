import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Col, Button, Input, FormFeedback } from 'reactstrap';
import { Form, Field } from 'react-final-form'
import * as validators from './validators';

const usernameValidators = [validators.requireValidator, validators.usernameLengthValidator];
const passwordValidators = [validators.requireValidator, validators.passwordLowerCaseValidator, validators.passwordUpperCaseValidator, validators.passwordNumberValidator, validators.passwordLengthValidator];
const dateValidators = [validators.dateFormatValidator];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const passChecker = {pass: 'a', confPass: 'b'};

const validateAll = (...validators) => { 
  return (value, name) => {
    const errors = [];
    // if(name.password === name.confirm)
    //   console.log('fdf');
    validators.reduce((error, validator) => {     
     if(validator(value) !== undefined) 
        errors.push(validator(value))
    }, undefined
    );
    
    return errors.length > 0 ? errors.join(',') : undefined;
  }
}

const Module = () => (
  <div className="container">
    <h1>🏁 React Final Form - Simple Example</h1>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit}) => (
        <form onSubmit={handleSubmit} >
          <div>
             <Field name="username" validate={validateAll(...usernameValidators)} initial="dante">
              {({ input, meta }) => (
                <div>
                  <label>Username</label>
                  <Input {...input} invalid={meta.invalid && meta.touched && !meta.active}  type="text" placeholder="Username" />
                  {meta.error && !meta.active && meta.touched && (
                    meta.error = meta.error.split(',').map((error, index) => (
                      <FormFeedback key={index} invalid="error">
                        {error}
                      </FormFeedback>
                    ))
                  )}
                </div>
              )}
              </Field>
            </div>
            <div>
            <Field name="password" validate={validateAll(...passwordValidators)}>
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <Input  {...input}  invalid={meta.invalid && meta.touched && !meta.active} type="password" placeholder="Password" />
                    {meta.error && !meta.active && meta.touched && (
                    meta.error = meta.error.split(',').map((error, index) => (
                      <FormFeedback key={index} invalid="error">
                        {error}
                      </FormFeedback>
                    ))
                  )}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="confirm" validate={validateAll(...passwordValidators)}>
                {({ input, meta }) => (
                  <div>
                    <label>Confirm password</label>
                    <Input  {...input} invalid={meta.invalid && meta.touched && !meta.active} type="password" placeholder="Confirm password" />
                    {meta.error && !meta.active && meta.touched && (
                    meta.error = meta.error.split(',').map((error, index) => (
                      <FormFeedback key={index} invalid="error">
                        {error}
                      </FormFeedback>
                    ))
                  )}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="date" validate={validateAll(...dateValidators)}>
                {({ input, meta }) => (
                  <div>
                    <label>Date of birth</label>
                    <Input {...input} invalid={meta.invalid && meta.touched && !meta.active} type="text" placeholder="Date of birth" />
                    {meta.error && !meta.active && meta.touched && (
                    meta.error = meta.error.split(',').map((error, index) => (
                      <FormFeedback key={index} invalid="error">
                        {error}
                      </FormFeedback>
                    ))
                  )}
                  </div>
                )}
              </Field>
            </div>
          
          <div className="buttons">
            <Button type="submit" className="btn-width">
              Submit
            </Button>
          </div>
        </form>
          )}
        />
        </div>
);

render(<Module />, document.getElementById("root"));