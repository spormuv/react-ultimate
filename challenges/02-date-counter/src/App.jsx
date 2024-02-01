import { useState } from 'react';

function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="item">
        <button className="btn" onClick={() => setStep(s => s - 1)}>
          -
        </button>
        <span>Step: {step}</span>
        <button className="btn" onClick={() => setStep(s => s + 1)}>
          +
        </button>
      </div>

      <div className="item">
        <button className="btn" onClick={() => setCount(c => c - step)}>
          -
        </button>
        <span>Count: {count}</span>
        <button className="btn" onClick={() => setCount(c => c + step)}>
          +
        </button>
      </div>

      <p className="result">
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

export default App;
