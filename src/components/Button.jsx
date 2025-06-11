const Button = (props) => {
  return (
    <a href="" className={`${props.className ?? ''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">
          {props.text}
        </p>
        <div className="arrow-wrapper">
          <img src={props.imgUrl} alt="arrow"/>
        </div>
      </div>
    </a>
  );
}

export default Button;