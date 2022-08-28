import { useState } from "react";
import "./index.css";
import Button from "./components/button";
import Formulary from "./components/input";

function App() {
  const validationEmpty = () => {
    setName("");
    setPassword("");
    if (name === "") {
      alert("ingresar tu nombre de usuario");
    }
  };
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dataValidation = (e) => {
    e.preventDefault();
    return;
  };
  return (
    <>
      <div className="login">
        <h1 className="header-title">ingresa clave soldado</h1>
        <form className="form" onSubmit={dataValidation}>
          <Formulary
            setName={setName}
            setPassword={setPassword}
            name={name}
            password={password}
          />
          <div>
            {password === "252525" && (
              <Button validationEmpty={validationEmpty} />
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
