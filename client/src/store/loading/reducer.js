import {
  LOADING_START,
  LOADING_FINISHED,
} from './constants'

const initialState={
  module: '',
  fetching: false,
};

export const loadingReducers = (state = initialState, action) => {
  switch (action.type) {
  
    case LOADING_START:
      return { ...action.payload, fetching: true };
  
    case LOADING_FINISHED:
      return { ...action.payload, fetching: false };  
  
    default:
      return state;
  }
};

export default{
  loading: loadingReducers,
};