import React, { useState } from "react";

//2. 모듈 스코프 변수를 사용하면 컴포넌트가 리렌더링되어도 이전 상태값이 유지되지만
//모든 Message 컴포넌트에서 공유된다.
// let count = 0;
// let count = 0

function Message() {
  console.log(" Message렌더링");

  const [msg, setMsg] = useState("");
  
  // let count = 0;
  
  const [count, setCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
    setCount(count+1);
  };
  /*
  제어 컴포넌트
    - input 요소에 value, onChange 를 추가
    - 리액트의 state와 input요소의 value를 동기화

  비제어 컴포넌트
    - input 요소에 value, onChange를 추가하지않음
    - 리액트의 state와 input 요소의 value가 동기화되지 않음
  */

  return (
    <div>
      <input type="text" value={msg} onChange={handleChange} />
      <br />
      <span>입력 메세지:{msg} </span>
      <br />
      <span>입력 횟수: {count} </span>
    </div>
  );
}

export default Message;
