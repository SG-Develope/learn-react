import CounterContext from '@/contexts/CounterContext';
import { use, useEffect } from 'react';

function Left3() {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });

  // context 사용하기
  const { count } = use(CounterContext); // React 19에 추가

  // TODO 4. ThemeContext 사용하기(theme)

  return (
    <div>
      {/* 라이트 모드에서는 숫자를, 다크 모드에서는 숫자만큼 별을 보여줌 */}
      {/* <h3>Left3</h3> */}
      {/* <span>{ count }</span> */}

      <h3>Left3 {' - 💫'}</h3>
      <span>{ new Array(count).fill('💫') }</span>
    </div>
  );
}

export default Left3;