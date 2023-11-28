import { useDispatch, useSelector } from "react-redux";
import { register } from "redux/auth/auth-operations";
import { Button, Form, Input } from 'antd';
import { toast } from "react-toastify";


export const RegisterForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.auth);
    const onFinish = values => {
        const { email, password, confirm, name } = values;
        if (password === confirm) {
            dispatch(register({
                name, email, password
            }));
            !isLoading && !error && form.resetFields();
        } else {
            toast('Paswords are not matching')
        }
    }
    return (
        <Form onFinish={onFinish} name="register" size={'default'}>
        <Form.Item label="Username" name="name">
            <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
            <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
            <Input.Password />
        </Form.Item>

        <Form.Item label="Confirm password" name="confirm">
            <Input.Password />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
            Register
            </Button>
        </Form.Item>
        </Form>
    )

}
export default RegisterForm;