import CounterContext from '@/contexts/CounterContext';
import { useContext, useEffect } from 'react';

function Left3() {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });

  const counter = useContext(CounterContext);

  return (
    <div>
      <h3>Left3</h3>
      <span>{counter?.count}</span>
    </div>
  );
}

export default Left3;