import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styled from "styled-components";

const FormWrap = styled.div`
  width: 70%
`

const FormItem = Form.Item;

class ProfileForm extends Component {
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
                    <FormItem label="Организация:">
                        <Input />
                    </FormItem>
                    <FormItem label="Контактный телефон:">
                        <Input />
                    </FormItem>
                    <FormItem label="Город:">
                        <Input />
                    </FormItem>
                    <FormItem label="Адрес:">
                        <Input />
                    </FormItem>
                    <FormItem label="Дополнительная информация:">
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

const WrappedProfileForm = Form.create()(ProfileForm);

export default WrappedProfileForm;