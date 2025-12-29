import { atom } from "jotai";


// read-write atom
// 자동으로 getter,setter 모두 생성됨
// setter 로직이 단순할 경우 사용하는 컴포넌트에서 직접 구현
export const countAtom = atom(5); // 상태 하나를 정의(초기값);


//derived(파생) atom
export const doubleCountAtom = atom((get) => get(countAtom) * 2);
export const ddoubleCountAtom = atom((get) => get(doubleCountAtom) * 2);


// write-only atom
export const countDownAtom = atom(null, (get, set, step: number) => {
  const count = get(countAtom);
  let newCount = count - step;
  if (newCount < 0) {
    newCount = 0;
  }
  set(countAtom, newCount);

});
