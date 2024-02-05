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

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={e => setStep(+e.target.value)}
        />
        <span>{step}</span>
      </div>

      <div className="item">
        <button className="btn" onClick={() => setCount(c => c - step)}>
          -
        </button>
        <input
          className="input-field"
          type="text"
          value={count}
          onChange={e => setCount(+e.target.value)}
        />
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

      {count !== 0 || step !== 1 ? (
        <button className="btn" onClick={handleReset} style={{ width: '50%' }}>
          {' '}
          Reset
        </button>
      ) : null}
    </>
  );
}

export default App;
