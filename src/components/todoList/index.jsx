import { Flex } from "antd";
import { useSelector } from "react-redux";
import TodoItem from "../todoItem";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <Flex vertical gap="middle">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </Flex>
  );
}

export default TodoList;
