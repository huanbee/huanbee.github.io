import { createSelector } from 'reselect'
import {initialState} from './reducers';

// reselect function
export const makeSelectLoading = createSelector(
  state => state.scr1.loading,
  loading => loading
)
export const makeSelectAddress = createSelector(
  state => state.scr1.address,
  address => address
)
export const makeSelectData = createSelector(
  state => state.scr1.data,
  data => data
)
export const makeSelectError= createSelector(
  state => state.scr1.error,
  error => error
)
export const makeSelectDailyForecasts= createSelector(
  state => state.scr1.data.DailyForecasts,
  DailyForecasts => DailyForecasts
)
export const makeSelectLocalSearch= createSelector(
  state => state.scr1.localSearch,
  localSearch => localSearch
)
export const makeSelectLocalSearchData= createSelector(
  state => state.scr1.dataSearch,
  dataSearch => dataSearch
)

