import { useState } from "react";
import ClickMe from "./ClickMe";

function App() {
  const [show, setShow] = useState<boolean>(true);
  console.log("리렌더링 테스트")
  
  const test=> (e: React.) => {

  }
  
  return (
    <div>
      <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
      <button onClick={() => setShow(!show)}>ClickMe 제거</button>
      {show ? <ClickMe level={2} /> : ""}
    </div>
  );
}

export default App;

