import { useState } from "react";
import "./App.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service?
      </SelectPercentage>

      <SelectPercentage percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ percentage, setPercentage, children }) {
  return (
    <>
      <div>
        <label>{children} </label>
        <select
          value={percentage}
          onChange={(e) => setPercentage(+e.target.value)}
        >
          <option value="0">Dissatisfied 0%</option>
          <option value="5">It was okay 5%</option>
          <option value="10">It was good 10%</option>
          <option value="20">Absolutely amazing! 20%</option>
        </select>
      </div>
    </>
  );
}

function Output({ bill, tip }) {
  return (
    <p>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </p>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
