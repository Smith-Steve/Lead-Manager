import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
/* This is a 'meeting place' for all other reducers. */
/* Any reducer you bring in needs to go into this object */

export default combineReducers({
  leads,
  errors,
});
