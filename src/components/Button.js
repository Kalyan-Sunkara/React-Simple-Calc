import './Button.css'

const Button = (props) => {
  const buttonHandler = (event) =>{
    props.onButtonPress(props.title)
  }
  return(
    <button className="button__look" onClick={buttonHandler}>{props.title}</button>
  )
}
export default Button
