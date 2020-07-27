import { INCREASE, DECREASE } from '../constants/ActionType'
import { fetchCounter } from '../api/FakeApi'
const increasing = (data) => ({
    type: INCREASE,
    step: data.step
})

const increase = () => (dispatch) => {
    console.log("HIHI")
    // fetchCounter().then( (data) => {
    //     console.log("data", data)
    //     return dispatch(increasing(data))
    // })
}

const decreasing = () => ({
    type: DECREASE
})

const decrease = () => (dispatch) => {
    return dispatch(decreasing())
}

export {
    increase,
    decrease
}