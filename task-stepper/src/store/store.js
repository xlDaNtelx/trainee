import { createStore, combineReducers } from 'redux';
import { stepsReducer } from './reducers/steps';
import { reducer } from 'redux-form';

const reducerForm = combineReducers({
  form: reducer,
  steps: stepsReducer
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducerForm);

export default store;
