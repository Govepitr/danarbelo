const Button =( props) => {
  return <button style={{display: "block", margin: "0 auto", marginTop: "15px" }} onClick={props.onClickHandler}>{props.title}</button>
};

export default Button;