import { useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';

import { logIn } from 'redux/auth/auth-operations';

const LogIn = () => {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(logIn(values));
    }

    return (
       <Form onFinish={onFinish}>
        <Form.Item label="Email" name="email" htmlFor="email">
            <Input type="email" name="email" id="email" />
        </Form.Item>

        <Form.Item label="Password" name="password" htmlFor="password">
            <Input type="password" name="password" id="password" />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
            Log In
            </Button>
        </Form.Item>
        </Form>

    )
}

export default LogIn;