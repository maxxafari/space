//import style from "./stylebutton.css";
import "./button.scss";
const Button = (props) => {
  const { children } = props;

  return (
    <div className="button__wrap">
      <button {...props}>{children}</button>
    </div>
  );
};

export default Button;
