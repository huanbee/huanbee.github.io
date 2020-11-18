import {
  REQUEST_GET_DATA_COMPLETED,
  REQUEST_GET_DATA_ERROR,
  REQUEST_GET_DATA_START,
  CHANGE_ADDRESS_LOCAL,
  SEARCH_LOCAL_START,
  SEARCH_LOCAL_COMPLETED
} from "./ActiveType";

export const initialState = {
  loading: true,
  error: "",
  data: {},
  address:"353412",
  localSearch:"",
  dataSearch:{}
};
const sc1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_GET_DATA_ERROR:
      return {
        ...state,
        error: action.error,
        loading: true,
      };
    case REQUEST_GET_DATA_COMPLETED:
      return {
        ...state,
        data: action.addItem.output,
        loading: false,
      };
    case CHANGE_ADDRESS_LOCAL:
      return {
        ...state,
        address: action.payload,
        data: {},
        loading: true,
      };
    case SEARCH_LOCAL_START:
      return {
        ...state,
        localSearch: action.payload,
        dataSearch:{}
      };
    case SEARCH_LOCAL_COMPLETED:
      return {
        ...state,
        dataSearch: action.payload
      };
    default:
      return state;
  }
};
export default sc1Reducer;
