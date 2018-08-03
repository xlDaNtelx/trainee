import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { require } from '../../../../validators/validators';
import StepField from '../../../../components/StepField';
import '../steps.css';

const LoginForm = () => (
  <Fragment>
    <Field
      id="login"
      validate={require}
      name="login"
      label="Enter login..."
      component={StepField}
      type="text"
      className="step-input" />
  </Fragment>
);

export default LoginForm;
