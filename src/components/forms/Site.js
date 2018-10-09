import React, { Component } from 'react';
import { Form, Input, Button, Switch } from 'antd';
import styled from "styled-components";

const FormWrap = styled.div`
  width: 70%
`

const FormItem = Form.Item;

class SiteForm extends Component {
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
                        label="Домен:">
                        <Input />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Обслуживание:"
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

const WrappedSiteForm = Form.create()(SiteForm);

export default WrappedSiteForm;