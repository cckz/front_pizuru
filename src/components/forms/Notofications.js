import React, { Component } from 'react';
import { Form, Button, Switch } from 'antd';
import styled from "styled-components";

const FormWrap = styled.div`
  width: 70%
`

const FormItem = Form.Item;

class NotificationsForm extends Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'vertical',
        };
    }

    render() {
        const { formLayout } = this.state;
        const formItemLayout = {
            labelCol: { span: 21 },
            wrapperCol: { span: 3 },
        };
        return (
            <FormWrap>
                <Form layout={formLayout}>
                    <FormItem
                        {...formItemLayout}
                        label="Новости / Блог:"
                    >
                        <Switch />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Акции / Скидки:"
                    >
                        <Switch />
                    </FormItem>
                    <FormItem >
                        <Button type="primary">Сохранить</Button>
                    </FormItem>
                </Form>
            </FormWrap>
        );
    }
}

const WrappedNotificationsForm = Form.create()(NotificationsForm);

export default WrappedNotificationsForm;