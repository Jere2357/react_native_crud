import {combineReducers} from 'redux';
import DestinationReducers from './DestinationReducers';

export default combineReducers({
  destination: DestinationReducers,
});
