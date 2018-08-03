import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { require } from '../../../../validators/validators';
import StepField from '../../../../components/StepField';
import '../steps.css';

const AdditionalForm = () => (
  <Fragment>
    <Field 
    id="email" 
    label="Enter email..." 
    validate={require} 
    name="additional" 
    component={StepField}
    type="text" 
    className="step-input" />
  </Fragment>
);

export default AdditionalForm;
