import { ADD_NEW, DELETE } from "../../redux/ActiveType";

// const addNew = (value:any) => {
//   return {
//     type: ADD_NEW,
//     newItem: value,
//   };
// };
const addNew = (value:any) => {
  return {
    type: ADD_NEW,
    newItem: value,
  };
};
const deleteNum = (item:any) => {
  return {
    type: DELETE,
    item: item
  };
};

export { addNew, deleteNum };
