import { useEffect, useState } from "react";

function App() {
  console.log("렌더링시작");

  useEffect(() => {
    console.log("App 렌더링 완료");
  }, []);

  const [userName, setUserName] = useState("GD");
  const [num, setNum] = useState(1);

  
  // 지정한 수가 소수인지 여부를 반환
  const isPrime = function (num: number) {
    console.time("소요 시간");
    console.log("소수 판별 시작", num);
    // 소수 판별 코드
    let prime = true;
    
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    
    console.log("소수 판별 결과", prime);
    console.timeEnd("소요 시간");
    
    return prime;
  };
  
  const prime = isPrime(num);
  
  return (
    <>
      <h1>05 useMemo - 함수의 반환값을 memoize</h1>
      <div>
        <input
          type="text"
          name="username"
          value="GD"
          onChange={(e) => setUserName(e.target.value)}
        />
        가 좋아하는 숫자:
        <input
          type="number"
          name="number"
          min="1"
          max="1000000007"
          value="7"
          onChange={(e) => setNum(Number(e.target.value))}
        />
        <div>
          <span>
            {userName}가 좋아하는 숫자 {num}: 소수가
          </span>
          {prime ? (
            <span style={{ color: "blue" }}>맞습니다.</span>
          ) : (
            <span style={{ color: "blue" }}>아닙니다..</span>
          )}
        </div>
      </div>
    </>
  );
}

export default App;