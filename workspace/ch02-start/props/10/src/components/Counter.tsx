import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("count 렌더링");
  const clickUpEvent = () => {
    const newCount = count + 1;
    setCount(newCount);
    return null;
  };
  const clickDownEvent = () => {
    const newCount = count - 1;
    setCount(newCount);
    return null;
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div id="counter">
      <Button onClick={clickDownEvent} color="red">
        -_-
      </Button>
      <Button onClick={reset} color="green">
        0_0
      </Button>
      <Button onClick={clickUpEvent} color="gray">
        +_+
      </Button>
      <span>{count}</span>
    </div>
  );
}
