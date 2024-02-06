import { useState } from "react";
import "./style.css";
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="counter">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p>Step: {step} </p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="counter">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p>Count: {count} </p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {count === 0
          ? "today "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
          <span>
        {date.toDateString()}
        </span>
      </p>
    </>
  );
}

export default App;
