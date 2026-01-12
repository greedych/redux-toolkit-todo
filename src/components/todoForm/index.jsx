import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/slices";

function TodoForm() {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const onFinish = () => {
    const todoText = form.getFieldValue().text;
    dispatch(addTodo({ id: Math.random(), text: todoText, completed: false }));
    console.log(todos);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} name="todo">
      <Form.Item name="text">
        <Input placeholder="Todo Text" />
      </Form.Item>

      <Form.Item>
        <Button onClick={() => console.log()} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TodoForm;
