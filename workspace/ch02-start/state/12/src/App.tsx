import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("클릭 핸들러 시작");

    // setter 함수가 호출되어도 즉시 리렌더링하지않고,
    // 이벤트 핸들러 함수가 완전히 실행 된 후(리턴한 후)에 상태를 체크해서 필요하다면 리렌더링함
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);


    //리렌더링 되기 이전에 수정된 상태값을 꺼내서 사용하려면 콜백 함수를 setter에 전달해야한다.
    setCount((currCount)=> currCount + 1);
    setCount((currCount)=> currCount + 1);
    setCount((currCount)=> currCount + 1);



    console.log("클릭 핸들러 종료", count);
  }



  return (
    <>
      <h2>12 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h2>
      <p>{ count }</p>
      <button onClick={ handleClick }>+1</button>
    </>
  );
}

export default App;
