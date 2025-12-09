import { useState } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("KRW");
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState<number>(0);


  const exchangeRateHandler = (from: string, to: string) => {
    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then(response => {
        const rate = response.data.rates[to];
        const result = amount * rate;
        setResult(result);
      })
      .catch(error =>  console.log(error));
  };

  const exchangeHandler = () => {

    const toChange = from;
    const fromChange = to;

    setFrom(to);
    setTo(from);

    exchangeRateHandler(fromChange, toChange);

  };


  return (
    <>
      <div className="card">
        <h2>환율 계산기</h2>

        <label htmlFor="amount">금액</label>
        <input
          id="amount"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          type="number"
          step="1"
        />

        <div className="row">
          <div>
            <label htmlFor="from">From</label>
            <select
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="KRW">KRW</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
          <div>
            <label htmlFor="to">To</label>
            <select
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}>
              <option value="USD">USD</option>
              <option value="KRW">KRW</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
        </div>

        <div className="row" style={{ marginTop: "12px" }}>
          <button id="convert" onClick={() =>exchangeRateHandler(from,to)}>
            변환
          </button>
          <button id="swap" type="button" onClick={exchangeHandler}>
            ↺ 교차
          </button>
        </div>

        <div className="result" id="result">
          {result}
        </div>
      </div>
    </>
  );
}

export default App;
