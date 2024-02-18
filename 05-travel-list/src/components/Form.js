import { useState } from 'react';

export default function Form({ onAddItems }) {
  const [descr, setDescr] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!descr) return;

    const newItem = {
      id: Date.now(),
      description: descr,
      quantity,
      packed: false,
    };

    onAddItems(newItem);

    setDescr('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        name="quantity"
        value={quantity}
        onChange={e => setQuantity(+e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="description"
        placeholder="Item..."
        value={descr}
        onChange={e => setDescr(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
