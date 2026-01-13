import { Button, Flex, Typography } from "antd";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../../redux/slices";

function TodoItem({ text, id, completed }) {
  const dispatch = useDispatch();

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleToggle = (todoId) => {
    dispatch(toggleCompleted(todoId));
  };

  return (
    <Flex gap="middle" align="center" justify="space-between">
      <Typography
        style={{
          textDecoration: completed ? "line-through" : "none",
          fontSize: "1.2rem",
        }}
      >
        {text}
      </Typography>
      <Flex gap="small">
        <Button
          type="primary"
          style={{ background: completed ? "#b53cdaff" : "#3939f1ff" }}
          onClick={() => handleToggle(id)}
        >
          {completed ? "Unfinish" : "Finish"}
        </Button>
        <Button onClick={() => handleDelete(id)} color="danger" variant="solid">
          Delete
        </Button>
      </Flex>
    </Flex>
  );
}

export default TodoItem;
