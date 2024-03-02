import { useState } from "react";
import "./DateCounter.css";

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleNextDate() {
    setCount((c) => c + step);
  }

  function handlePrevDate() {
    setCount((c) => c - step);
  }

  return (
    <>
      <div className='counter'>
        <button
          onClick={() => {
            if (step > 1) setStep(step - 1);
          }}
          style={{ fontSize: "1.2rem" }}
        >
          &#45;
        </button>
        <div>Steps: {step}</div>
        <button
          onClick={() => setStep(step + 1)}
          style={{ fontSize: "1.2rem" }}
        >
          &#43;
        </button>
      </div>

      <div className='counter'>
        <button onClick={handlePrevDate} style={{ fontSize: "1.2rem" }}>
          &#45;
        </button>
        <div>Count: {count}</div>
        <button onClick={handleNextDate} style={{ fontSize: "1.2rem" }}>
          &#43;
        </button>
      </div>

      <div>
        <h1 style={{ textAlign: "center" }}>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </h1>
      </div>
    </>
  );
}

export default DateCounter;
