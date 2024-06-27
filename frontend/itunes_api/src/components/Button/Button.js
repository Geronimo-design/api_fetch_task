/** @format */

// Importing modules to be used in the component
import './Button.css';

// Takes props that allows the button to be customised. This Button is used mainly in Search.js and Favourites.js to customise the text content and event handler functionality of the buttons that that they render
const Button = (props) => {
  return (
    <button onClick={props.onClick} data-testid='Button test'>
      {props.text}
    </button>
  );
};

export default Button;
