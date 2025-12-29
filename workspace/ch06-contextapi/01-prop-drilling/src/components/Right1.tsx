import Right2 from '@/components/Right2';
import { useEffect } from 'react';

function Right1({
  setCount,
  count,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}) {
  useEffect(() => {
    console.log("## Right1 렌더링.");
  });
  return (
    <div>
      <h1>Right1</h1>
      <Right2 setCount={setCount} count={count} />
    </div>
  );
}

export default Right1;