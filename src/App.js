function App() {
  const step = 1;
  return (
    <div className="steps">
      <h1>Go step by step</h1>
      <div className="numbers">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div className="message">
        <p>Step {step}</p>
      </div>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
