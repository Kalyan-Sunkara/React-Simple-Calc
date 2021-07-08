import './Row.css'
import Button from './Button'
const Row = (props) =>{
  // return(props.items)
  const saveResult = (enteredResult) => {
    props.onResultChange(enteredResult)
  }
  return(
    <div className="row_template">
    {props.items.map((button_info) => (
    <Button
      key={button_info.id}
      title={button_info.title}
      onButtonPress={saveResult}
      />
    ))}
    </div>
  )
}
export default Row
