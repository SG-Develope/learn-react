//TODO 1. slice 생성(ActionCreator, Reducer 생성)


import { createSlice} from "@reduxjs/toolkit"

//리턴값 {actions, reducer}
export const counterSlice = createSlice({
  // act ionCreator, Reducer를 정의
  name: "myCounter", //슬라이스 이름(액션 타입의 접두사로 사용됨)
  initialState: { count: 5 }, //초기 상태값
  reducers: {
    countUp: (state, action) => {
      //immer 라이브러리를 내부적으로 사용하기 때문에 속성을 직접 수정해도 상태의 불변성이 유지됨
      state.count += action.payload;
    },
    countDown: (state, action) => {
      state.count -= action.payload;
    },
    countReset: (state) => {
      state.count = 0;
    },
  },
});
