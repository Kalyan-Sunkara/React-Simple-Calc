import './ResultList.css'
import ResultItem from './ResultItem'
const ResultList = (props) =>{
  const clearHandler = () =>{
    props.onClear()
  }
  return(
    <div>
    <div className="Desktop">
    <div className="ResultList__card">
    <div className="top">
      <h2 className="ResultList__header">Previous Results</h2>
      <button onClick={clearHandler} className="Clear__Button__Style">Clear</button>
      </div>
      <ul className="ResultList__ul">
      {props.items.map((item) => (
      <ResultItem
      key={item.id}
      result={item.result}
      equation={item.equation}
      />
      ))}
      </ul>
      </div>
      </div>
      <div className="phone">
        <div className="ResultList__card__phone">
        <div className="top">
          <h2 className="ResultList__header__phone">Previous Results</h2>
          <button onClick={clearHandler} className="Clear__Button__Style__phone">Clear</button>
          </div>
          <ul className="ResultList__ul">
          {props.items.map((item) => (
          <ResultItem
          key={item.id}
          result={item.result}
          equation={item.equation}
          />
          ))}
          </ul>
          </div>
      </div>
      </div>

  )
}
export default ResultList
