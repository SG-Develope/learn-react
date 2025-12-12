import Todoinfo from "./pages/Todoinfo";
import TodoList from "./pages/TodoList";

function App() {
  const id = window.location.pathname.split("/").pop();
  return <>{id ? <Todoinfo /> : <TodoList />}</>;
}

export default App;
