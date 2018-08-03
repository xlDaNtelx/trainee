import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { require, email, minLength, password } from '../../../validators/validators';
import StepField from '../../StepField';
// import '../steps.css';

const MainInfo = () => (
  <Fragment>
    <Field
      id="email"
      validate={[require, email]}
      name="email"
      label="EMAIL"
      component={StepField}
      type="text"
      classField="step-margin" />
    <Field
      id="password"
      validate={[require, minLength]}
      name="password"
      label="PASSWORD"
      component={StepField}
      type="password"
      className="step-input" />
    <Field
      id="confirmPassword"
      validate={[require, minLength, password]}
      name="confirmPassword"
      label="CONFIRM PASSWORD"
      component={StepField}
      type="password"
      className="step-input" />
  </Fragment>
);

export default MainInfo;
