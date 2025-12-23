import { createContext, useState } from "react";

interface CounterContextType {
  countUp: (step: number) => void;
  reset: (step: number) => void;
  countDown: (step: number) => void;
}

const CounterContex = createContext<CounterContextType | null>(null);


//2 provider 컴포넌트를 만들어서 export

export function CounterProvider({children}: { children:React.ReactNode}) {
  const [count, setCount] = useState(0);

  const countUp = (step: number) => {
    setCount(count + step);
  }

  const reset = (step: number) => {
    setCount(count + step);
  };

  const countDown = (step: number) => {
    setCount(count - step);
  };


  const context = {
    count,
    countUp,
    reset,
    countDown
  }

  return <CounterContex value={context}> {children} </CounterContex>;


}

