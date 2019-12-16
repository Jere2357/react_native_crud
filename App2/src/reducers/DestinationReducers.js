import {
  DESTINATION_CREATE_SUCCESS,
  DESTINATION_CREATE_FAILED,
  DESTINATION_READ_SUCCESS,
  DESTINATION_READ_FAILED,
  DESTINATION_DELETE_SUCCESS,
  DESTINATION_DELETE_FAILED,
  DESTINATION_SINGLE_VIEW_SUCCESS,
  DESTINATION_SINGLE_VIEW_FAILED,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  temperature: '',
  location: '',
  height: '',
  difficulty: '',
  about: '',
  duration: '',
  water: '',
  image: '',
  destinations: [],
  singleViewDestinations: [],
  error: '',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DESTINATION_READ_SUCCESS:
      return {
        ...state,
        destinations: action.payload,
      };
    case DESTINATION_READ_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case DESTINATION_CREATE_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        temperature: action.payload.temperature,
        location: action.payload.location,
        height: action.payload.height,
        difficulty: action.payload.difficulty,
        about: action.payload.about,
        duration: action.payload.duration,
        water: action.payload.water,
        image: action.payload.image,
      };
    case DESTINATION_CREATE_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case DESTINATION_DELETE_SUCCESS:
      return {
        ...state,
        name: '',
        temperature: '',
        location: '',
        height: '',
        difficulty: '',
        about: '',
        duration: '',
        water: '',
        image: '',
      };
    case DESTINATION_DELETE_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case DESTINATION_SINGLE_VIEW_SUCCESS:
      return {
        ...state,
        singleViewDestinations: action.payload,
      };
    case DESTINATION_SINGLE_VIEW_FAILED:
      return {
        ...state,
        name: '',
        temperature: '',
        location: '',
        height: '',
        difficulty: '',
        about: '',
        duration: '',
        water: '',
        image: '',
        error: '',
      };
    default:
      return state;
  }
}
