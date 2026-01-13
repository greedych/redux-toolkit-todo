import { Flex } from "antd";
import { useSelector } from "react-redux";
import TodoItem from "../todoItem";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <Flex vertical gap="middle">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            text={todo.text}
            id={todo.id}
            completed={todo.completed}
          />
        );
      })}
    </Flex>
  );
}

export default TodoList;
