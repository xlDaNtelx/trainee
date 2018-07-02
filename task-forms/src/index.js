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
            mainValidator: this.validatorHandler
        }
    }
    
    validatorHandler = (name, validator, index) => {
        const fieldState = this.state[name];
        //console.log(fieldState.value)
        //console.log(validator(fieldState.value))
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
                    />
                    <Field 
                        type="password" 
                        value={this.state.password.value}
                        // onBlur={}
                        onFocus={this.focusHandler} 
                        onChange={this.changeHandler}
                        data={this.state.password}
                        validateHandler={this.validatorHandler}
                    />
                    <Field 
                        type="confirmPassword" 
                        value={this.state.confirmPassword.value}
                        // onBlur={}
                        onFocus={this.focusHandler} 
                        onChange={this.changeHandler}
                        data={this.state.confirmPassword}
                        passwordState={this.state.password}
                        validateHandler={this.validatorHandler}
                        validateConfirmPasswordHandler={this.validatorConfirmPasswordHandler}
                    />
                    <Field 
                        type="dateOfBirth"
                        value={this.state.dateOfBirth.value}
                        // onBlur={}
                        onFocus={this.focusHandler} 
                        onChange={this.changeHandler}
                        data={this.state.dateOfBirth}
                        validateHandler={this.validatorHandler}
                        placeholder="dd/mm/yyyy"
                    />
                    <Field
                        type="submit"
                        data={this.state.submit}
                        fieldsState={this.state}
                        validateHandler={this.validatorHandler}
                    >
                    </Field>
                </Form>
            </div>
        );
    }
}

ReactDOM.render(
    <RegForm />,
    document.getElementById('root')
);


  