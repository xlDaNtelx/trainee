import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import {
  Row, Col, Button, Container, Badge
} from 'reactstrap';
import {connect} from 'react-redux';
import RegistrationIndex from './RegistrationIndex';
import StepLogin from './Steps/StepLogin';
import StepPassword from './Steps/StepPassword';
import StepAdditional from './Steps/StepAdditional';
import StepCongratulation from './Steps/StepCongratulation';
import './registration.css';

class Registration extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { match, wasLogin, wasPassword, wasAdditional } = this.props;
    return (
      <Router>
        <React.Fragment>
          {/* <Button color="danger" className="main-promo-btn btn-start">st</Button></Link> */}
          <Route exact path={`${match.url}`} component={RegistrationIndex} />
          <Route path={`${match.path}/stepLogin`} component={StepLogin} />
          <Route path={`${match.path}/stepPassword`} render={() => (
            !wasLogin
              ? ( <Redirect to="/registration" /> ) 
              : ( <StepPassword match={match}/> )
          )} />
          <Route path={`${match.url}/stepAdditional`} render={() => (
            !wasLogin || !wasPassword 
              ? ( <Redirect to="/registration" /> ) 
              : ( <StepAdditional match={match}/> )
          )} />
          <Route path={`${match.url}/stepCongratulation`} render={() => (
            !wasLogin || !wasPassword || !wasAdditional 
              ? ( <Redirect to="/registration" /> ) 
              : ( <StepCongratulation /> )
          )} />
        </React.Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    wasLogin: state.steps.wasLogin, 
    wasPassword: state.steps.wasPassword, 
    wasAdditional: state.steps.wasAdditional 
  };
};

export default connect(mapStateToProps)(Registration);
