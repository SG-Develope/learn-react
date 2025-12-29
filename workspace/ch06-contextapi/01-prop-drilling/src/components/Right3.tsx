import { useEffect } from 'react';

function Right3({setCount, count} : {setCount:React.Dispatch<React.SetStateAction<number>>, count: number}) {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => {setCount(count + 1)} }>+1</button>
    </div>
  );
}

export default Right3;