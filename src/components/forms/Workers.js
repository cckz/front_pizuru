import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styled from "styled-components";

const FormWrap = styled.div`
  width: 70%
`

const FormItem = Form.Item;

class WorkersForm extends Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'vertical',
        };
    }

    render() {
        const { formLayout } = this.state;

        return (
            <FormWrap>
                <Form layout={formLayout}>
                    <FormItem
                        label="Сотрудник:">
                        <Input />
                    </FormItem>
                    <FormItem
                        label="Пароль:">
                        <Input />
                    </FormItem>
                    <FormItem >
                        <Button type="primary">Добавить сотрудника</Button>
                    </FormItem>
                </Form>
            </FormWrap>
        );
    }
}

const WrappedWorkersForm = Form.create()(WorkersForm);

export default WrappedWorkersForm;