import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './components/Message';

function App() {
  const [count, setCount] = useState(0);


  let count = 0;
  

  return (
    <>
      <h3>
        11 state 대신 컴포넌트 외부의 변수(모듈 스코프 변수) 사용시 문제점
      </h3>

      <Message/>
     
    </>
  );
}

export default App
