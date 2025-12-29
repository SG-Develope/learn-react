import { countAtom, countDownAtom } from '@/jotai/atoms';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  //useAtom: useState 처럼 getter, setter를 배열로 반환
  // const [count,setCount] = useAtom(countAtom);
  // const countUp = (step: number) => {
  //   setCount(count + step);
  // }

  const setCount = useSetAtom(countAtom);

  const countUp = (step:number) => {
    setCount((count) => count + step);
  }

    const countReset = () => {
      setCount(0);
    };

  const countDonw = useSetAtom(countDownAtom);

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => {countDonw(1);} }>+1</button>
      <button onClick={ () => {countReset();} }>+1</button>
      <button onClick={ () => {countUp(1)} }>+1</button>
    </div>
  );
}

export default Right3;
