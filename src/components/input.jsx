const Formulary = (props) => {
    return (
      <>
        <div className="box">
          <label>nombre</label>
          <input
            value={props.name}
            type="text"
            placeholder="ingresa un texto soldado"
            onChange={(e) => props.setName(e.target.value)}
          />
        </div>
        <div className="box">
          <label>contraseña</label>
          <input
            value={props.password}
            type="password"
            placeholder="ingresa una contraseña"
            onChange={(e) => props.setPassword(e.target.value)}
          />
        </div>
      </>
    );
  };
  
  export default Formulary;