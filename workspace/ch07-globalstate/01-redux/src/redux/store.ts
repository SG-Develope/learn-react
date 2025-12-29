//Todo 3. Store 생성


//Redux에서는 redux-toolkit 사용을 권장
import { createStore } from "redux";
import counterReducer from "./counterReducer";

const Store = createStore(counterReducer);


// store.getState가 리턴하는 타이을 RootState 타입으로 지정
export type RootState = ReturnType<typeof Store.getState>;

export default Store;