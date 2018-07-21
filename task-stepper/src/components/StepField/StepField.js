import React from 'react';
import { Input } from 'reactstrap';

export const StepField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
      <Input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

export default StepField;