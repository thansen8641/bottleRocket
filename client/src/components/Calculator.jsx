import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { calculateInterest, clearCalculatedInterest } from '../store/actions/calculatorActions.jsx'


const Calculator = (props) => {
const [principalAmount, setPrincipalAmount] = useState('')
const [rateAmount, setRateAmount] = useState('')
const [yearsAmount, setYearsAmount] = useState('')
const [totalAmount, setTotalAmount] = useState(null)



useEffect(() => {
  setTotalAmount(props.calculatedInterest)
}, [props])



const handleCalculateSubmit = () => {
  var principalNum = parseInt(principalAmount)
  var rateNum = parseFloat(rateAmount)
  var yearsNum = parseInt(yearsAmount)

  var rateAndTimeCalc = rateNum * yearsNum + 1

  var total = principalNum * rateAndTimeCalc

  props.calculateInterest(total)
}

const handleClearCalculator = () => {
  props.clearCalculatedInterest()
  setPrincipalAmount('')
  setRateAmount('')
  setYearsAmount('')
}

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "600px", height: "600px", border: "1px solid black" }}>
      <h1 style={{ fontSize: "40px", fontWeight: 500, textAlign: "center", width: "100%" }}> Interest Calculator</h1>
      <div style={{ display: "flex", flexDirection: "column", height: "60%", alignItems: "center", justifyContent: "space-around" }}>
        <label style={{display: "flex", flexDirection: "column", width: "80%"}}> Principal <input value={principalAmount} onChange={(e) => setPrincipalAmount(e.target.value)} style={{ width: "100%" }} placeholder='Principal'></input></label>
        <label style={{display: "flex", flexDirection: "column",  width: "80%"}}>Rate
        <input value={rateAmount} onChange={(e) => setRateAmount(e.target.value)} style={{ width: "100%" }} placeholder='Rate'></input></label>
        <label style={{display: "flex", flexDirection: "column",  width: "80%"}}>Years
        <input value={yearsAmount} onChange={(e) => setYearsAmount(e.target.value)} style={{ width: "100%" }} placeholder='Years'></input>
        </label>
        {totalAmount ? (
          <div>
          <h6 style={{fontSize: "25px"}}>Total: ${totalAmount}</h6>
          <button onClick={handleClearCalculator}>Clear</button>
          </div>
        ) : (
          <button onClick={handleCalculateSubmit}>Calculate</button>
        )}
      </div>

    </div>
  )
}


const mapStateToProps = (state) => {
  console.log('stateeeee', state.calculatedInterest)
  return {
    calculatedInterest: state.calculatedInterest,
  }
}

const mapDispatchToProps = (dispatch) => {
return{
  calculateInterest: (amount) => dispatch(calculateInterest(amount)),
  clearCalculatedInterest: () => dispatch(clearCalculatedInterest())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);