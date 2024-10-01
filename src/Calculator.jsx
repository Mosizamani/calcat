import React, { useReducer, useEffect } from "react";
import './Calculator.css'


function calculatorRedurcer(state, action) {
    switch (action.type) {
        case 'setOperator':
            return { ...state, display: state.current, operator: action.operator, current: 0 }
        case 'add':
            return { ...state, display: state.display + state.current, current: 0 }
        case 'subtract':
            return { ...state, display: state.display - state.current, current: 0 }
        case 'multiply':
            return { ...state, display: state.display * state.current, current: 0 }
        case 'divide':
            return { ...state, display: state.display / state.current, current: 0 }
        case 'input':
            return { ...state, current: state.current * 10 + action.value }
        case 'calculate':
            switch (state.operator) {
                case 'add':
                return { ...state, display: state.display + state.current, current: 0, operator: null };
                case 'subtract':
                return { ...state, display: state.display - state.current, current: 0, operator: null };
                case 'multiply':
                return { ...state, display: state.display * state.current, current: 0, operator: null };
                case 'divide':
                return { ...state, display: state.display / state.current, current: 0, operator: null };
                default:
                return state;
            }
        case 'reset':
            return { display: 0, current: 0 }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }

}

function Calculator({ onEqualClick }) {
    
    const [state, dispatch] = useReducer(calculatorRedurcer, { display: 0, current: 0, operator: null })
    
    function handleReset() {
        dispatch({type: 'reset'})
        console.log("Reset")
    }
    
    
    function handleClick(value) {
        
        dispatch({type: 'input', value: Number(value)})
        console.log("Clicked", value)
    }
    
    function calculateResult() {
        dispatch({ type: 'calculate' })
        onEqualClick()
    }

    function handleOperator(operator) {
        dispatch({ type: 'setOperator', operator });
        console.log("Operator Set", operator);
      }

    useEffect(() => {
        console.log("The result is:", state.display);
    }, [state.display])

    return (
      <div className="calculator-container">
          <p className="calculator-name">Calculator</p>
          <div className="calculator-display">
              {state.current !== 0 ? state.current : state.display}
          </div>
          <div className="calculator-row">
              <button className="calculator-button" onClick={() => handleClick("1")}>1</button>
              <button className="calculator-button" onClick={() => handleClick("2")}>2</button>
              <button className="calculator-button" onClick={() => handleClick("3")}>3</button>
              <button className="calculator-button" onClick={() => handleOperator('add')}>+</button>
          </div>
          <div className="calculator-row">
              <button className="calculator-button" onClick={() => handleClick("4")}>4</button>
              <button className="calculator-button" onClick={() => handleClick("5")}>5</button>
              <button className="calculator-button" onClick={() => handleClick("6")}>6</button>
              <button className="calculator-button" onClick={() => handleOperator('subtract')}>-</button>
          </div>
          <div className="calculator-row">
              <button className="calculator-button" onClick={() => handleClick("7")}>7</button>
              <button className="calculator-button" onClick={() => handleClick("8")}>8</button>
              <button className="calculator-button" onClick={() => handleClick("9")}>9</button>
              <button className="calculator-button" onClick={() => handleOperator('multiply')}>*</button>
          </div>
          <div className="calculator-row">
              <button className="calculator-button reset" onClick={handleReset}>C</button>
              <button className="calculator-button" onClick={() => handleClick("0")}>0</button>
              <button className="calculator-button equal" onClick={calculateResult}>=</button>
              <button className="calculator-button" onClick={() => handleOperator('divide')}>/</button>
          </div>
      </div>
  );
}

export default Calculator;
