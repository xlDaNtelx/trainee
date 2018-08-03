import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { require, email, minLength, password } from '../../../validators/validators';
import StepField from '../../StepField';
import { connect } from 'react-redux';
import {
  Card, CardImg, CardText, CardBody, Row, Container, CardLink,
  CardTitle, CardSubtitle, Button, Progress, CardHeader, CardFooter
} from 'reactstrap';
import './final.css';

class Final extends React.Component {

  showResult = () => {
    const sex = this.props.values.sex ? this.props.values.sex : 'MALE';
    const {
      confirmPassword, day, email, month, password,
      whereFrom, year
    } = this.props.values;
    console.log('ConfirmPassword: ', confirmPassword);
    console.log('Day of Birth: ', day);
    console.log('Email: ', email);
    console.log('Month: ', month);
    console.log('Password: ', password);
    console.log('Where discover us: ', whereFrom);
    console.log('Year: ', year);
    console.log('Sex: ', sex);
  }

  render() {
    return (
      <Container>
        <Row>
          <Card className='final-wrapper'>
            <CardImg top width="100%" src="/static/final.png" alt="Card image cap" />
            <CardBody className='final-footer'>
              <Button outline onClick={this.showResult} color="primary" className="final-btn">Go to Dashbord</Button>{' '}
            </CardBody>
          </Card>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  //const defaultFields = { values: { login: '', password: '', additional: '' } };
  console.log('state', state);
  return {
    values: state.form.SignUp.values
    //login: state.form.registration ? state.form.registration.values.login : '',
    //password: state.form.registration ? state.form.registration.values.password : '',
    //additional: state.form.registration ? state.form.registration.values.additional : ''
  };
};

export default connect(mapStateToProps)(Final)

