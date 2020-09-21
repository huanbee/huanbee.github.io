import { ex1State } from "./types";
import { ADD_NEW, DELETE } from "../../redux/ActiveType";

export const numInitialState: ex1State = {
  num: [0,5]
};
const numReducer = (state = numInitialState, action:any) => {
  switch (action.type) {
    case ADD_NEW:
      return  {...state, num: [...state.num, action.newItem ]};
    case DELETE:
      //dung filter loc ra cac phan tu khac i, sau day copy de len mang
      return{...state, num: state.num.filter((value, i) => i !== action.item)};
    default:
      return state;
  }
};
export default numReducer;
