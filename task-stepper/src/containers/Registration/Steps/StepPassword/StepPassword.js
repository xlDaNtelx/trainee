import React from 'react';
import { Field } from 'redux-form';
import { require } from '../../../../validators/validators';
import StepField from '../../../../components/StepField';
import '../steps.css';

const PasswordForm = () => (
  <React.Fragment>
    <Field 
    id="password" 
    validate={require} 
    label="Enter password..." 
    name="password" 
    component={StepField} 
    type="password" 
    className="step-input" />
  </React.Fragment>
);

export default PasswordForm;
