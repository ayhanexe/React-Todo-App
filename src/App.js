import "./App.css";
import Todo from "./components/todo/todo";
import { TodoConsumer } from "./contexts/todo-context";

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
