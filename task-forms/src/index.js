import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Col, Form, FormGroup, Label, Input, Button, FormFeedback, FormText  } from 'reactstrap';
import Field from './Field';
import * as Validators from './Validators';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

class RegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: {
                value: '',
                errors: [],
                validators: [
                    Validators.requireValidator, 
                    Validators.usernameLengthValidator
                ],
                dirty: false,
                focused: false
            },
            password: {
                value: '',
                errors: [],
                validators: [
                    Validators.requireValidator, 
                    Validators.passwordLowerCaseValidator, 
                    Validators.passwordUpperCaseValidator, 
                    Validators.passwordNumberValidator, 
                    Validators.passwordLengthValidator
                ],
                dirty: false,
                focused: false
            },
            confirmPassword: {
                value: '',
                errors: [],
                validators: [Validators.requireValidator, Validators.confirmPasswordValidator],
                dirty: false,
                focused: false
            },
            dateOfBirth: {
                value: '',
                errors: [],
                validators: [
                    Validators.dateFormatValidator,
                ],
                dirty: false,
                focused: false
            },
            submit: {
                value: '',
                errors: [],
                validators: [
                    Validators.requireValidator, 
                    Validators.usernameLengthValidator, 
                    Validators.passwordLowerCaseValidator, 
                    Validators.passwordUpperCaseValidator, 
                    Validators.passwordNumberValidator, 
                    Validators.passwordLengthValidator,
                    Validators.dateFormatValidator
                ],
            },
            mainValidator: this.validatorHandler,
        }
        this.validateAll();
    }
    
    validatorHandler = (name, validator, index) => {
        const fieldState = this.state[name];
        fieldState.errors[index] = validator(fieldState.value);
        this.setState({
            [name]: fieldState
        })
    }

    validatorConfirmPasswordHandler = () => {
        const fieldState = this.state.confirmPassword;
        fieldState.errors[1] = Validators.confirmPasswordValidator(this.state.password.value, this.state.confirmPassword.value);
        this.setState({
            confirmPassword: fieldState 
        })
    }

    changeHandler = (data) => {
        this.setState({
            data
        })
    }

    focusHandler = (data) => {
        this.setState({
            data
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('The form was sent');
    }

    validateAll = () => {
        for(let fieldKey in this.state) {
            if(typeof this.state[fieldKey] === 'object') {
                for(let index in this.state[fieldKey].validators) {
                    this.validatorHandler(fieldKey, this.state[fieldKey].validators[index], index);
                }
            } 
        }
    }
    
    render() {
        return(
            <div className="container form-margin">
                <Form onSubmit={this.handleSubmit}>
                    <Field 
                        type="username"
                        value={this.state.username.value}
                        onFocus={this.focusHandler} 
                        onChange={this.changeHandler}
                        data={this.state.username}
                        validateHandler={this.validatorHandler}
                        fieldType="text"
                        name="Username"
                    />
                    <Field 
                        type="password" 
                        value={this.state.password.value}
                        // onBlur={}
                        onFocus={this.focusHandler} 
                        onChange={this.changeHandler}
                        data={this.state.password}
                        validateHandler={this.validatorHandler}
                        fieldType="password"
                        name="Password"
                    />
                    <Field 
                        type="confirmPassword" 
                        value={this.state.confirmPassword.value}
                        name="Confirm password"
                        onFocus={this.focusHandler} 
                        onChange={this.changeHandler}
                        data={this.state.confirmPassword}
                        passwordState={this.state.password}
                        validateHandler={this.validatorHandler}
                        validateConfirmPasswordHandler={this.validatorConfirmPasswordHandler}
                        fieldType="Confirm password"
                    />
                    <Field 
                        type="dateOfBirth"
                        value={this.state.dateOfBirth.value}
                        name="Date of birth"
                        onFocus={this.focusHandler} 
                        onChange={this.changeHandler}
                        data={this.state.dateOfBirth}
                        validateHandler={this.validatorHandler}
                        fieldType="text"
                    />
                    <FormGroup row>   
                        <Col xs={6} className="mx-auto">
                            <Button 
                                color="success" 
                                size="md" 
                                className="mx-auto btn-width"
                                onClick={this.validateAll}
                            >
                            Click me</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

ReactDOM.render(
    <RegForm />,
    document.getElementById('root')
);


  