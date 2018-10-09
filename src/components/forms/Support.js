import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styled from "styled-components";

const FormWrap = styled.div`
  width: 70%
`

const FormItem = Form.Item;

class SupportForm extends Component {
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
                    <FormItem label="Запрос:">
                        <Input.TextArea rows={4} />
                    </FormItem>
                    <FormItem >
                        <Button type="primary">Сохранить</Button>
                    </FormItem>
                </Form>
            </FormWrap>
        );
    }
}

const WrappedSupportForm = Form.create()(SupportForm);

export default WrappedSupportForm;