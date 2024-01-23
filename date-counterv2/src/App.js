import { useState } from "react";

function App() {
  const [step, setStep] = useState(1); // State Lifting
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Range step={step} setStep={setStep} />
      <ControlCount step={step} count={count} setCount={setCount} />
      <ResetBtn
        setStep={setStep}
        setCount={setCount}
        count={count}
        step={step}
      />
    </div>
  );
}

function Range({ step, setStep }) {
  return (
    <div>
      <input
        type="range"
        max={10}
        onChange={(e) => setStep(+e.target.value)}
        value={step}
      />
      <label htmlFor="range">{step}</label>
    </div>
  );
}
function ControlCount({ step, count, setCount }) {
  function handleDecrease() {
    setCount((x) => (x > step ? x - step : 1));
  }

  function handleIncrease() {
    setCount((x) => x + step);
  }
  const date = new Date("june 21 2027");

  date.setDate(date.getDate() + count);

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={handleIncrease}>+</button>
      <p>
        {count === 0
          ? "Today "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

function ResetBtn({ setCount, setStep, count, step }) {
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <>
      {(count > 0 || step > 1) && <button onClick={handleReset}>Reset</button>}
    </>
  );
}
export default App;
