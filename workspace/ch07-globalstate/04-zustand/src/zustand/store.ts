import { create } from "zustand"


interface CounterState {
  count: number;
  countUp: (step:number) => void
  countReset: () => void
  countDown: (step: number) => void
  user: {name:string,age:number}
}

const useCounterStore = create<CounterState>((set, get) => ({

  count: 5,
  user: { name:  'haru', age:5},
  countReset: () => set({ count: 0 }),
  countDown: (step:number) => {
    const count = get().count; //현재 count 값
    const newCount = count - step;
    const newState = { count: newCount };
    set(newState);
   },
  countUp: (step:number) => set({ count : get().count + step}),

}));


export default useCounterStore;