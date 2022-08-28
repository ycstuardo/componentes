const Button = (props) => {
  return (
    <>
      <p>haz click soldado</p>
      <div className="button-box">
        <button
          onClick={() => {
            props.validationEmpty();
          }}
        >ingresar</button>
      </div>
    </>
  );
};

export default Button;
