import CalcDisplay from './components/CalcDisplay'
import ResultList from './components/ResultList'
import React, { useState } from 'react'
const RESULTS = [];
function App() {
  const [total_result, setTotalResults] = useState(RESULTS);
  const addResultHandler = (result) => {
    setTotalResults(prevResults =>
      { return [result, ...prevResults]
      });
    };
    const clearResultHandler = () => {
      setTotalResults([])
    }
  return (
    <div>
      <CalcDisplay onNewResult={addResultHandler}/>
      <ResultList items={total_result} onClear={clearResultHandler}/>
    </div>
  );
}

export default App;
