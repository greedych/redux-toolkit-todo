import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices";

function TodoForm() {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const onFinish = () => {
    const todoText = form.getFieldValue().text;
    if (todoText) {
      dispatch(
        addTodo({ id: Math.random(), text: todoText, completed: false })
      );

      form.resetFields();
    }
  };

  return (
    <Form form={form} onFinish={onFinish} name="todo">
      <Form.Item name="text">
        <Input placeholder="Todo Text" style={{ padding: "10px" }} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          style={{ background: "#02cc02ff", width: "100%" }}
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TodoForm;
