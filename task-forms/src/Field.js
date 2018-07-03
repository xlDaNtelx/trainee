import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Col, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = props.data;
        console.log(props);
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
    
    validateAll = () => {
        for(let fieldKey in this.props.fieldsState) {
            if(typeof this.props.fieldsState[fieldKey] === 'object') {
                for(let index in this.props.fieldsState[fieldKey].validators) {
                    this.props.validateHandler(fieldKey, this.props.fieldsState[fieldKey].validators[index], index);
                }
            } 
        }
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
        
        const {type} = this.props;
        
        switch(type) {
            case 'username':
                return (
                    <FormGroup row>   
                        <Col xs={6} className="mx-auto">
                            <Label for="username" className="label-stylish">Username</Label>
                            <Input 
                                type="text" 
                                value={this.state.value}
                                name="username" 
                                id="username" 
                                onChange={this.changeHandler} 
                                onFocus={this.focusHandler}
                                onBlur={this.validate}
                                invalid={this.errorsCheck()}
                            />
                            {this.showErrors(true)}
                        </Col>
                    </FormGroup>
                );
            case 'password':
                return (
                    <FormGroup row>   
                        <Col xs={6} className="mx-auto">
                            <Label for="password" className="label-stylish">Password</Label>
                            <Input 
                                id="password" 
                                type="password" 
                                name="password"
                                onChange={this.changeHandler}
                                onFocus={this.focusHandler}
                                onBlur={this.validate}
                                invalid={this.errorsCheck()}
                            />
                            {this.showErrors(true)}
                        </Col>
                    </FormGroup>
                );
            case 'confirmPassword':
                return (
                    <FormGroup row>   
                        <Col xs={6} className="mx-auto">
                            <Label for="confirmPassword" className="label-stylish">Confirm password</Label>
                            <Input 
                                id="confirmPassword" 
                                type="password" 
                                name="confirmPassword"
                                onChange={this.confirmPasswordChangeHandler}
                                onFocus={this.confirmPasswordFocusHandler}
                                onBlur={this.validateConfirmPassword}
                                invalid={this.errorsCheck()}
                            />
                            {this.showErrors(true)}
                        </Col>
                    </FormGroup>
                );    
            case 'dateOfBirth':
                return (
                    <FormGroup row>   
                        <Col xs={6} className="mx-auto">
                            <Label for="dateOfBirth" className="label-stylish">Date of birth</Label>
                            <Input 
                                id="dateOfBirth" 
                                type="text" 
                                name="dateOfBirth" 
                                onChange={this.changeHandler}
                                onFocus={this.focusHandler}
                                onBlur={this.validate}
                                invalid={this.errorsCheck()}
                                // placeholder="mm/dd/yyyy"
                            />
                            {this.showErrors(true)}
                        </Col>
                    </FormGroup>
                );
            case 'submit':
                return(
                    <FormGroup row>   
                        <Col xs={1} className="mx-auto">
                            <Button 
                                color="success" 
                                size="md" 
                                className="mx-auto"
                                onClick={this.validateAll}
                            >
                            Click me</Button>
                        </Col>
                    </FormGroup>
                )
        }
    }
}

export default Field;