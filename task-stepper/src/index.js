import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import Registration from './containers/Registration';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import LoginForm from './containers/Registration/StepLogin';
// import PasswordForm from './containers/Registration/StepPassword';
// import AdditionalForm from './containers/Registration/StepAdditional';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
