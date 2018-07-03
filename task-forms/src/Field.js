import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Col, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = props.data;
    }

    changeHandler = (event) => {
        const fieldState = this.state;
        fieldState.value = event.target.value;
        
        if(!fieldState.dirty) {
            fieldState.dirty = true;
        }
        this.props.onChange({data: fieldState});
        this.validate();
    }

    confirmPasswordChangeHandler = (event) => {
        const fieldState = this.state;
        fieldState.value = event.target.value;
        
        if(!fieldState.dirty) {
            fieldState.dirty = true;
        }
        this.props.onChange({data: fieldState});
        this.validateConfirmPassword();
    }

    focusHandler = () => {
        const fieldState = this.state;
        for(let index in fieldState.errors)
            fieldState.errors[index] = null
        if(!fieldState.focused) {
            fieldState.focused = true;
        }
        this.props.onFocus({data: fieldState});
    }

    confirmPasswordFocusHandler = () => {
        const fieldState = this.state;
        for(let index in fieldState.errors)
            fieldState.errors[index] = null
        if(!fieldState.focused) {
            fieldState.focused = true;
        }
        this.props.onFocus({data: fieldState});
        // this.validateConfirmPassword();
    }

    blurHandler = () => {
        this.validate(this.state.type);
    }

    validate = () => {
        for(let index in this.state.validators)
            this.props.validateHandler(this.props.type, this.state.validators[index], index);
    }

    validateConfirmPassword = () => {
        this.validate();
        this.props.validateConfirmPasswordHandler();
    }
    
    

    showErrors = (showAll) => {
        if(showAll) {
            const errorsList = [];
            for(let i = 0; i < this.state.validators.length; i++) {
                const element = <FormFeedback key={i} invalid={this.state.errors[i]}>{this.state.errors[i]}</FormFeedback>
                errorsList.push(element);
            }
             return errorsList ? errorsList : false;
        }
    }

    errorsCheck = () => {
        let errorsCount = 0;
        for(let i = 0; i < this.state.errors.length; i++)
            if(this.state.errors[i])
                errorsCount++;
        return errorsCount ? true : false;
    }

    render() {
        
        const {type, fieldType, name} = this.props;
        return (
            <FormGroup row>   
                <Col xs={6} className="mx-auto">
                    <Label for="username" className="label-stylish">{name}</Label>
                    <Input 
                        type={fieldType} 
                        value={this.state.value}
                        name={type} 
                        id={type} 
                        onChange={this.changeHandler} 
                        onFocus={this.focusHandler}
                        onBlur={this.validate}
                        invalid={this.errorsCheck()}
                        placeholder={`Enter ${name}...`}
                    />
                    {this.showErrors(true)}
                </Col>
            </FormGroup>
        ); 
    }
}

export default Field;