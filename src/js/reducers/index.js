import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import base from './base';

export default combineReducers({
  base,
  routing,
});
