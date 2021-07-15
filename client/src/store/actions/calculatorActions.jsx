import React from 'react'




export const calculateInterest = (amount) => {
  return {
    type: "SET_CALCULATED_INTEREST",
    amount
  }
}

export const clearCalculatedInterest = () => {
  return {
    type: "CLEAR_CALCULATED_INTEREST"
  }
}


