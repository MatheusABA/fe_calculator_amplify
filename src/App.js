import React, { useState } from "react";
import "./App.css";

const App = () => {
    
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay(""); // Limpa o display
    } else if (value === "=") {
      try {
        if (display.includes("/0")) {
          setDisplay(""); // Trata divisões por zero
        } else {
          // eslint-disable-next-line no-eval
          const result = eval(display).toPrecision(2); // Avalia a expressão
          setDisplay(result);
        }
      } catch {
        setDisplay("");
      }
    } else {
      setDisplay(display + value); // Adiciona ao display
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    ".", "0", "C", "+",
    "=",
  ];

  return (
    <div className="calculator">
        <h2 style={{
            textAlign: "center"
        }}>
            Calculadora
        </h2>

      <div className="display">{display || "0"}</div>
      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button}
            className="button"
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
