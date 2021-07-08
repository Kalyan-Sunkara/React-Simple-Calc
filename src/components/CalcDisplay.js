import React, { useState } from 'react';
import {evaluate} from 'mathjs'
import './CalcDisplay.css'
import Row from './Row'
const calc_info_zero = [
  {
    id: '(',
    title: '(',
  },
  {
    id: ')',
    title: ')',
  },
  {
    id: ' % ',
    title: ' % ',
  },
  {
    id: 'C',
    title: 'C',
  },
];
const calc_info_first = [
  {
    id: '7',
    title: '7',
  },
  {
    id: '8',
    title: '8',
  },
  {
    id: '9',
    title: '9',
  },
  {
    id: ' / ',
    title: ' / ',
  },
];
const calc_info_second = [
  {
    id: '4',
    title: '4',
  },
  {
    id: '5',
    title: '5',
  },
  {
    id: '6',
    title: '6',
  },
  {
    id: ' * ',
    title: ' * ',
  },
];
const calc_info_third=[
  {
    id: '1',
    title: '1',
  },
  {
    id: '2',
    title: '2',
  },
  {
    id: '3',
    title: '3',
  },
  {
    id: ' - ',
    title: ' - ',
  },
];
const calc_info_fourth=[
  {
    id: '0',
    title: '0',
  },
  {
    id: '.',
    title: '.',
  },
  {
    id: '=',
    title: '=',
  },
  {
    id: ' + ',
    title: ' + ',
  },
];
const CalcDisplay = (props) => {
  const[result,setResult] = useState('')
  const resultHandler = (button_value) => {
    if(button_value === '='){
      try {
        let temp_answer=evaluate(result).toString()
        setResult(temp_answer);
        const resultData = {
            id: Math.random(),
            result: temp_answer,
            equation: result,
          };
        props.onNewResult(resultData)
      }
      catch(err) {
        setResult('Ooops')
      }
      // setResult(eval(result).toString())
    }
    else if (button_value === 'C') {
      setResult('')
    }
    else{
      setResult(result.concat(button_value))
    }
  };
  return(
    <div>
    <h2 className="welcome">Welcome to the Calculator App</h2>
    <div className="outer-calc">
      <div className="innerCalc-results">
        <p className="result">{result}</p>
      </div>
      <div className="innerCalc-options">
        <Row items={calc_info_zero} onResultChange={resultHandler} />
        <Row items={calc_info_first} onResultChange={resultHandler} />
        <Row items={calc_info_second}onResultChange={resultHandler} />
        <Row items={calc_info_third} onResultChange={resultHandler} />
        <Row items={calc_info_fourth} onResultChange={resultHandler} />
      </div>
    </div>
    </div>
  )
}
export default CalcDisplay
