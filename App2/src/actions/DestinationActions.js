import axios from 'axios';
import {
  DESTINATION_CREATE_SUCCESS,
  DESTINATION_CREATE_FAILED,
  DESTINATION_UPDATE_SUCCESS,
  DESTINATION_UPDATE_FAILED,
  DESTINATION_READ_SUCCESS,
  DESTINATION_READ_FAILED,
  DESTINATION_DELETE_SUCCESS,
  DESTINATION_DELETE_FAILED,
  DESTINATION_SINGLE_VIEW_SUCCESS,
  DESTINATION_SINGLE_VIEW_FAILED,
} from './types';
const HEADERS = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const readDestinations = () => async dispatch => {
  try {
    const response = await axios.get(
      'https://intense-stream-35672.herokuapp.com/destinations',
      {},
      HEADERS,
    );
    if (response.status === 200) {
      dispatch({
        type: DESTINATION_READ_SUCCESS,
        payload: response.data,
      });
    }
  } catch (e) {
    dispatch({
      type: DESTINATION_READ_FAILED,
      payload: {
        error: 'error read destinations',
      },
    });
  }
};

export const createDestinations = payload => async dispatch => {
  try {
    const response = await axios.post(
      'https://intense-stream-35672.herokuapp.com/destinations',
      payload,
      HEADERS,
    );
    if (response.status === 200) {
      dispatch({
        type: DESTINATION_CREATE_SUCCESS,
        payload: response.data,
      });
    }
  } catch (e) {
    dispatch({
      type: DESTINATION_CREATE_FAILED,
      payload: {
        error: 'error create destination',
      },
    });
  }
};

export const updateDestinations = (id, payload) => async dispatch => {
  try {
    const response = await axios.put(
      `https://intense-stream-35672.herokuapp.com/destinations/${id}`,
      payload,
      HEADERS,
    );
    if (response.status === 200) {
      dispatch({
        type: DESTINATION_UPDATE_SUCCESS,
        payload: response.data,
      });
    }
  } catch (e) {
    dispatch({
      type: DESTINATION_UPDATE_FAILED,
      payload: {
        error: 'error updating destination',
      },
    });
  }
};

export const deleteDestinations = id => async dispatch => {
  try {
    const response = await axios.delete(
      `https://intense-stream-35672.herokuapp.com/destinations/${id}`,
      {},
      HEADERS,
    );
    if (response.status === 200) {
      dispatch({
        type: DESTINATION_DELETE_SUCCESS,
        payload: response.data,
      });
    }
  } catch (e) {
    dispatch({
      type: DESTINATION_DELETE_FAILED,
      payload: {
        error: 'error delete destination',
      },
    });
  }
};

export const readSingleDestination = id => async dispatch => {
  try {
    const response = await axios.get(
      `https://intense-stream-35672.herokuapp.com/destinations/${id}`,
      {},
      HEADERS,
    );
    if (response.status === 200) {
      dispatch({
        type: DESTINATION_SINGLE_VIEW_SUCCESS,
        payload: response.data,
      });
    }
  } catch (e) {
    dispatch({
      type: DESTINATION_SINGLE_VIEW_FAILED,
      payload: {
        error: 'error read single destination',
      },
    });
  }
};
