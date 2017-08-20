import { FETCH_WEATHER } from '../actions/actions';
import { combineReducers } from 'redux'

function weatherFetcher (state = [], action ) {
  switch(action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload]);

      }
    return state;
  }


const rootReducer = combineReducers ({
  weatherFetcher: weatherFetcher
});
export default rootReducer;
