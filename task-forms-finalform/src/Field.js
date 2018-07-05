import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Col, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

class Field extends Component {
  handleFocus = () => {
    const { name, onFocus } = this.props;
    onFocus(name);
  };

  handleChange = (e) => {
    const { name, onChange } = this.props;
    onChange(name, e.target.value);
  };

  handleBlur = () => {
    const { name, onBlur } = this.props;
    onBlur(name);
  };

  render() {
    const { data, label, name, ...other } = this.props;
    const { errors, dirty, focused } = data;
    return (
      <FormGroup row>
        <Col xs={6} className="mx-auto">
          <Label for={`id-${name}`} className="label-stylish">{label}</Label>
          <Input
            {...other}
            name={name}
            id={`id-${name}`}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            invalid={!!errors.length && dirty && !focused}
            placeholder={`Enter ${label}...`}
          />
          {!!errors.length && (
            errors.map((error, index) => (
              <FormFeedback key={index} invalid="error">
                {error}
              </FormFeedback>
            ))
          )}
        </Col>
      </FormGroup>
    );
  }
}

export default Field;