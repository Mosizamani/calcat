import React, { useState } from "react";


function calculatorRedurcer(state, action) {
    switch (action.type) {
        case 'add':
            return { display: state.display + state.current, current: 0 }
        case 'subtract':
            return { display: state.display - state.current, current: 0 }
        case 'multiply':
            return { display: state.display * state.current, current: 0 }
        case 'divide':
            return { display: state.display / state.current, current: 0 }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }

}

function handleClick(value) {
    console.log(value)
}

function Calculator() {

    const [state, dispatch] = useReducer(calculatorRedurcer, { display: 0, current: 0 })

  return (
    <div>
      <p>Calculator</p>
      <div style={{ marginBottom: "10px", fontSize: "24px", border: "1px solid black", padding: "10px" }}>
        {state.display || "0"}
      </div>
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => dispatch("add")}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => dispatch("subtrac")}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => dispatch("multiply")}>*</button>
      </div>
      <div>
        <button onClick={handleReset}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => dispatch("divide")}>/</button>
      </div>
    </div>
  )
}

export default Calculator;
