//Todo 3. Store 생성


//Redux에서는 redux-toolkit 사용을 권장
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

const Store = configureStore(
  
  {
    reducer: {
      counterStore: counterSlice.reducer
    }
  }
  );


// store.getState가 리턴하는 타이을 RootState 타입으로 지정
export type RootState = ReturnType<typeof Store.getState>;

export default Store;