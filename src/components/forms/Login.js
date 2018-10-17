import React, {Component} from 'react'
import { Form, Icon, Input, Button, message, Alert } from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values.userName, values.password)
            }
        });
    }

    showMessage = () => {
        message.error('This is a message of error');
    }

    render() {
        const { errors } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}
                  className="login-form"
                  hideRequiredMark={true}
                  layout='vertical'
                  style = {{ padding: "0 2rem" }}
            >
                {errors ?
                        <Alert type="error" message={ errors.non_field_errors } banner /> :
                    ""
                }
                <FormItem label="E-mail:">
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                    )}
                </FormItem>
                <FormItem label="Пароль:">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                        Войти
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const AntLoginForm = Form.create()(LoginForm);

export default AntLoginForm;