import { createSelector } from 'reselect'
import { numInitialState } from './numReducers';
import { ex1State } from './types';

export interface ApplicationRootState {
  readonly num: ex1State;
}

// reselect function
const selectNumber = (state: ApplicationRootState) => state.num|| numInitialState;
const makeSelectNumber = ()=> createSelector(
  (selectNumber),
  state => state.num
)
export{
  makeSelectNumber,
}
