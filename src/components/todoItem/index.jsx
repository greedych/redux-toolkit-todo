import { Button, Flex, Input, Modal, Typography } from "antd";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  toggleCompleted,
} from "../../redux/slices/todoSlice";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";

function TodoItem({ text, id, completed }) {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [newTodoText, setNewTodoText] = useState(text);

  const EditModalOpen = () => {
    setIsEdit(true);
  };

  const EditModalOk = (todoId) => {
    dispatch(editTodo({ id: todoId, text: newTodoText }));
    setIsEdit(false);
  };
  const EditModalCancel = () => {
    setIsEdit(false);
  };

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
          color: completed && "#884a9bff",
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
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={EditModalOpen}
          disabled={completed}
          style={{
            background: completed ? "#bdbdbd" : "#3939f1ff",
          }}
        />
        <Modal
          title="Edit Todo"
          closable={{ "aria-label": "Custom Close Button" }}
          open={isEdit}
          onOk={() => EditModalOk(id)}
          onCancel={EditModalCancel}
        >
          <Input
            value={newTodoText}
            onChange={(e) => {
              setNewTodoText(e.target.value);
            }}
          />
        </Modal>
      </Flex>
    </Flex>
  );
}

export default TodoItem;
