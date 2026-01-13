import "./App.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

function App() {
  return (
    <div style={{ padding: "0 20%" }}>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
