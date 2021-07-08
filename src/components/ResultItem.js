import './ResultItem.css'

const ResultItem = (props) => {
  return(
    <div>
    <div className="Desktop">
      <div className="results_div">
      <div className="results_spacing">
        <p className="result__style_1">{props.equation}</p>
        <p className="result__style_2">{props.result}</p>
      </div>
      </div>
    </div>
    <div className="Phone">
      <div className="results_div_phone">
      <div className="results_spacing">
        <p className="result__style_1_phone">{props.equation}</p>
        <p className="result__style_2_phone">{props.result}</p>
      </div>
      </div>
    </div>
    </div>
  )
}
export default ResultItem
