import { countState } from "@/jotai/atoms";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from 'react';

function Right3() {
  
  
  const setCount = useSetAtom(countState);

  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });



  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => {setCount(0)} }>reset</button>
      <button onClick={ () => {setCount((count)=>count -1)} }>-1</button>
      <button onClick={ () => {setCount((count)=>count +1)} }>+1</button>
    </div>
  );
}

export default Right3;