import React from 'react';

var calculatedInterest;

const initState = {
  calculatedInterest,
}


const rootReducer = (state = initState, action ) => {
  switch (action.type) {
    case "SET_CALCULATED_INTEREST":
    var toReturn = {...state}
    toReturn.calculatedInterest = action.amount
    return toReturn
    case "CLEAR_CALCULATED_INTEREST":
    var toReturn = {...state}
    toReturn.calculatedInterest = null
    return toReturn
    default:
    return state
  }
}

export default rootReducer;