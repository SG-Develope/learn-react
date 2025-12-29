import './App.css';
import Input from './components/common/Input';
import Button from './components/common/Button';
import CurrencyRow from './components/currency/CurrencyRow';
import ResultDisplay from './components/currency/ResultDisplay';
import { useEffect, useState } from 'react';
import type { Currency } from './types';
import { convertCurrency } from './utils/currency';

/**
 * 환율 계산기 메인 컴포넌트
 * 
 * 사용자가 입력한 금액을 선택한 통화로 변환하는 기능을 제공합니다.
 * - 금액 입력
 * - 변환할 통화 선택 (From/To)
 * - 환율 변환 실행
 * - 통화 교차 기능
 * 
 * 외부 API (frankfurter.dev)를 사용하여 실시간 환율 정보를 가져옵니다.
 */


function App() {

  // const [result, setResult] = useState<string>("");
  const [from, setFrom] = useState<Currency>("KRW");
  const [amount, setAmound] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [to, setTo] = useState<Currency>("USD");




  // useEffect(() => {
  //   const response = convertCurrency(1000, "KRW", "USD");
  // }, []);


  //반환 버튼 Currency
  const exchangeRateHandler = (
    amount: number,
    from: Currency,
    to: Currency
  ) => {

    convertCurrency(amount, from, to)
      .then(result => {
        if (result !== undefined) setConvertedAmount(result);
      })
      .catch(error => {
      console.log(error);
    })
  };


  // 교차 버튼 클릭 시 함수 
  const exchangeHandler = () => {
    const toChange = from;
    const fromChange = to;
    setFrom(to);
    setTo(from);
    exchangeRateHandler(amount , fromChange, toChange);
  };

  
  return (
    <>
      <div className="card">
        <h2>환율 계산기 - step 02</h2>

        <Input
          id="amount"
          label="금액"
          type="number"
          step="1"
          value={amount}
          onChange={(e) => {
            setAmound(Number(e.target.value));
          }}
        />

        <CurrencyRow
          from={from}
          to={to}
          onFromChange={(e) => {
            setFrom(e.target.value as Currency);
          }}
          onToChange={(e) => {
            setTo(e.target.value as Currency);
          }}
        />

        <div className="row" style={{ marginTop: "12px" }}>
          <Button
            id="convert"
            onClick={() => {
              exchangeRateHandler(amount, from, to);
            }}
          >
            변환
          </Button>
          <Button
            id="swap"
            type="button"
            onClick={() => {
              exchangeHandler();
            }}
          >
            ↺ 교차
          </Button>
        </div>
        <ResultDisplay
          result={`${amount} ${from} = ${convertedAmount} ${to}`}
        />
      </div>
    </>
  );
}

export default App;