import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormGroup, Label } from 'reactstrap';
import './stepField.css';

export const StepField = ({ onClick, current, additionalTitle, customWrapper, classField, id, input,
  label, type, maxLength, placeholder, customInput, meta: { active, touched, error, warning } }
) => (
    <div className='step-field-wrapper'>
      <FormGroup className={customWrapper}>
        {additionalTitle && <div className='step-additional-title'>{`${additionalTitle}`}&nbsp;</div>}
        <Label
          for={id}
          onClick={() => onClick()}
          className={`step-label ${current} ${classField} ${touched && !active && error ? 'error' : ''}`}>
          {label ? label : <span>&nbsp;</span>} {touched && !active && error}
        </Label>
        <Input {...input}
          id={id} type={type}
          placeholder={placeholder}
          className={`step-field ${customInput}`}
          maxLength={maxLength}
        />
      </FormGroup>
    </div>
  )

export default StepField;