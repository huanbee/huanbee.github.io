import {CHANGE_ADDRESS_LOCAL, REQUEST_GET_DATA_COMPLETED,REQUEST_GET_DATA_ERROR,REQUEST_GET_DATA_START, SEARCH_LOCAL_COMPLETED, SEARCH_LOCAL_ERROR, SEARCH_LOCAL_START } from "./ActiveType";

const getDataStart = () => {
  return {
    type: REQUEST_GET_DATA_START,
  };
};
const getDataComplete = (value) => {
  return {
    type: REQUEST_GET_DATA_COMPLETED,
    addItem: value,
  };
};
const getDataError = (value) => {
  return {
    type: REQUEST_GET_DATA_ERROR,
    error: value,
  };
};
const changeLocal = (value) => {
  return {
    type: CHANGE_ADDRESS_LOCAL,
    payload: value,
  };
};
const searchLocalStart = (value) => {
  return {
    type: SEARCH_LOCAL_START,
    payload: value,
  };
};
const searchLocalComplete = (value) => {
  return {
    type: SEARCH_LOCAL_COMPLETED,
    payload: value,
  };
};
const searchLocalError = (value) => {
  return {
    type: SEARCH_LOCAL_ERROR,
    payload: value,
  };
};

export { getDataStart,getDataComplete,getDataError,changeLocal,searchLocalStart,searchLocalComplete,searchLocalError };
