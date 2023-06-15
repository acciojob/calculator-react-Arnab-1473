
import React, { useState } from "react";

const Calculator = () => {

    // const [displayValue, setDisplayValue] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        console.log("clicked")
        setResult(result.concat(e.target.name));
    }
    const backspace = () => {
        setResult(result.slice(0, -1));
    }
    const clear = () => {
        setResult("");
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error')
        }
       
    }
    return (
        <div className="container">
            <input type="text" value={result}/>
            <div className="keypads">
                
                    <button id="clear" onClick={backspace}>C</button>
                    <button name="/" onClick={handleClick}>/</button>
                    <button name="*" onClick={handleClick}>*</button>
                    <button name="-" onClick={handleClick}>-</button>
                
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button name="+" className="row" id="add" onClick={handleClick}>+</button>
                
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button className="row" id="equal" onClick={calculate}>=</button>
                
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="." onClick={handleClick}>.</button>
                    <button onClick={clear}>Clear</button>
                
            </div>
        </div>
    )
}
export default Calculator;