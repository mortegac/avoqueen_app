
import { combineReducers } from 'redux';

// REDUCER
import loading from './loading/reducer';


export const reducers = () => ({
  ...loading,

});

export default combineReducers(reducers());

// const appReducer = combineReducers (reducers());

// // RESET STORE
// export default (state, action = {}) => {
// 	if ( action.type === RESET) {
// 		state = undefined;
// 	}
// 	return appReducer(state, action);
// };