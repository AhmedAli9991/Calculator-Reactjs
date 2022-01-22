import React from 'react';
import "./calculatorCss.css";
import {useState} from 'react';

const Calculator = () => {
   
    const [result,setResult]=useState("");
    const handlenumbers = (num) =>{
        setResult(result+num);
    }
    const equal=()=>{
        if(result[0]==='+'||result[0]==='-'||result[0]==='/'||result[0]==='*'||result[0]==='e'){
            setResult('error');
        }
        
        else if(result[result.length-1]==='+'||result[result.length-1]==='-'||result[result.length-1]==='/'||result[result.length-1]==='*'||result[result.length-1]==='r'){
            setResult('error');
        }
        else{
        setResult(eval(result));
        }
    }
    const clear=()=>{
        setResult("");
    }
    const c=()=>{
        const len=result.length-1;
        setResult(result.slice(0,len));
    }
        return (
            <div className="container" >
                <input className="result" type="text" value={result} onChange={(e)=>{setResult(e.target.value)}} />
                <div className="buttons">
                    <button style={{ borderRadius:5}} type="button"  id="clear" onClick={clear} >Clear</button>
                    <button style={{ borderRadius:5}} type="button"  id="C" onClick={c}>C</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('/')}>/</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('7')} >7</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('8')} >8</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('9')}>9</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('*')} >x</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('4')} >4</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('5')} >5</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('6')} >6</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('-')} >-</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('1')} >1</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('2')} >2</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('3')} >3</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('+')} >+</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('0')} >0</button>
                    <button style={{ borderRadius:5}} type="button" onClick={()=>handlenumbers('.')} >.</button> 
                    <button style={{ borderRadius:5}} type="button"onClick={equal} id="equal" >=</button>                       
                </div>
            </div>
          );
    
}
 
export default Calculator;