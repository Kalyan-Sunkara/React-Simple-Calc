import './ResultItem.css'

const ResultItem = (props) => {
  return(
    <div className="results_div">
    <div className="results_spacing">
      <p className="result__style_1">{props.equation}</p>
      <p className="result__style_2">{props.result}</p>
    </div>
    </div>
  )
}
export default ResultItem
