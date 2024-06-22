import { useEffect, useState } from 'react';

export default function App() {
  const [amount, setAmount] = useState(1);
  const [inputCurrency, setInputCurrency] = useState('EUR');
  const [outputCurrency, setOutputCurrency] = useState('USD');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${inputCurrency}&to=${outputCurrency}`;

  useEffect(() => {
    const controller = new AbortController();

    async function convert() {
      setIsLoading(true);
      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) throw new Error('Something went wrong with fetching data');

        const data = await res.json();
        setOutput(data.rates[outputCurrency].toFixed(3));
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    }

    if (inputCurrency === outputCurrency) return setOutput(amount);

    convert();

    return () => controller.abort();
  }, [amount, inputCurrency, outputCurrency, url]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={e => setAmount(+e.target.value)}
        disabled={isLoading}
      />
      <select
        value={inputCurrency}
        onChange={e => setInputCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={outputCurrency}
        onChange={e => setOutputCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {amount && (
        <p>
          {output} {outputCurrency}
        </p>
      )}
    </div>
  );
}
