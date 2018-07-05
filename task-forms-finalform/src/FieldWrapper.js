import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Input, FormFeedback, Label } from 'reactstrap';
import { Field } from 'react-final-form'

class FieldWrapper extends Component {
  render() {
    const { name, validatorFunc, type, placeholder, label } = this.props;
    return (
      <div>
        <Field name={name} validate={validatorFunc}>
          {
            ({ input, meta }) => (
              <div className="field-wrapper-margin">
                <Label for={name} className="label-stylish">{label}</Label>
                <Input {...input} id={name} invalid={meta.invalid && meta.touched && !meta.active} type={type} placeholder={placeholder} />
                {
                  meta.error && !meta.active && meta.touched && (
                    meta.error = meta.error.split(',').map((error, index) => (
                      <FormFeedback key={index} invalid="error">{error}</FormFeedback>
                    ))
                  )
                }
              </div>
            )
          }
        </Field>
      </div>
    );
  }
}

export default FieldWrapper;