import Reaction from "./reaction.js";
import Header from "./components/Header.js";
import Counter from "./components/Counter.js";


// App 컴포넌트
function App() {
  console.log("App 렌더링됨.");
  return Reaction.createElement("div", { id: "app" }, Header, Counter);
}


export default App;