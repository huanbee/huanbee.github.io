import React from "react";
import {  useSelector, useDispatch } from "react-redux";
import { makeSelectNumber } from "./selectors";
import { addNew, deleteNum } from "./numAction";
import { createStructuredSelector } from "reselect";

const stateSelector = createStructuredSelector<any, any>({
  num: makeSelectNumber()
});

export default function Ex1() {
  const {num} = useSelector(stateSelector);
  const dispatch = useDispatch();
  const useAddNumber = () => {
    dispatch(addNew(Math.floor(Math.random() * 100) + 1));
  };
  return (
    <>
      <button onClick={useAddNumber} >Add number</button>
      <h5>Generated numbers collection:</h5>
     <ul>
        {num.map((item:any, value:any) => (
          <li onClick={() => dispatch(deleteNum(value))} key={value}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
