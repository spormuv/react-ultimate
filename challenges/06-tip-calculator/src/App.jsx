/* eslint-disable react/prop-types */
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState('');
  const [ownPercentage, setOwnPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  function reset() {
    setBill('');
    setOwnPercentage(0);
    setFriendPercentage(0);
  }

  function calculate() {
    const tip = (bill * (ownPercentage + friendPercentage)) / 2 / 100;
    const total = bill + tip;
    return { bill, tip, total };
  }

  return (
    <main>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage
        percentage={ownPercentage}
        setPercentage={setOwnPercentage}
      >
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage
        percentage={friendPercentage}
        setPercentage={setFriendPercentage}
      >
        <span>How did your friend like the service?</span>
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output {...calculate()} />
          <ResetButton reset={reset} />
        </>
      )}
    </main>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Enter bill amount"
        value={bill}
        onChange={e => setBill(+e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ percentage, setPercentage, children }) {
  return (
    <div>
      {children}{' '}
      <select value={percentage} onChange={e => setPercentage(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip, total }) {
  return (
    <h3>
      You pay ${total} (${bill} + ${tip} tip)
    </h3>
  );
}

function ResetButton({ reset }) {
  return <button onClick={reset}>Reset</button>;
}

export default App;
