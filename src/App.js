import { useState } from "react";
const message = ["Learn React", "Find a Job", "Learn Next JS"];
function App() {
  const [step, setStep] = useState(1);
  function handleNextStep() {
    if (step < 3) {
      setStep((step) => step + 1);
      setStep((step) => step + 1);
    }
  }
  function handlePrevStep() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }
  return (
    <div className="steps">
      <h1>Go step by step</h1>
      <div className="numbers">
        <p className={`${step >= 1 ? "active" : ""}`}>1</p>
        <p className={`${step >= 2 ? "active" : ""}`}>2</p>
        <p className={`${step >= 3 ? "active" : ""}`}>3</p>
      </div>
      <div className="message">
        <p>Step: {message[step - 1]}</p>
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevStep}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
