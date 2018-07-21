import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {connect} from 'react-redux';
import Registration from '../Registration';
import HomeIndex from './HomeIndex';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

export class Home extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={HomeIndex}/>
          <Route path={`/registration`} component={Registration} />
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wasLogin: state.steps.wasLogin, 
    wasPassword: state.steps.wasPassword, 
    wasAdditional: state.steps.wasAdditional 
  };
};

export default connect(mapStateToProps)(Home);