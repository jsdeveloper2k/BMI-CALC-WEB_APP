import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Under Weight");
      } else if (bmiValue > 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue > 25 && bmiValue < 29.9) {
        setBmiStatus("Over Weight");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus(" ");
      setErrorMessage(
        "Please enter the valid numeric value for height & weight."
      );
    }
  };

  const clearAll = () => {
    setBmi(null);
    setHeight("");
    setWeight("");
    setBmiStatus("");
    setErrorMessage("");
  };

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI CALCULATOR</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="weight">Weight(Kgs):</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <button onClick={calculateBmi}> Calculate BMI</button>
          <button onClick={clearAll}> Clear</button>
          {bmi !== null && (
            <div className="result">
              <p>Your BMI is : {bmi}</p>
              <p>Status:{bmiStatus}</p>
            </div>
          )}
          {bmi == null && (
            <p className="copyright">
              Designed by <span>Js2kDeveloper &copy;</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
