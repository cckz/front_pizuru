import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styled from "styled-components";
import { connect } from 'react-redux'

import { addWorkers } from '../../actions/profile'

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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values)
            }
        });
    }

    render() {
        const { formLayout } = this.state;
        const { profile } = this.props
        const { getFieldDecorator } = this.props.form;

        return (
            <FormWrap>
                <Form layout={formLayout}
                      onSubmit={this.handleSubmit}
                >
                    <FormItem
                        label="Сотрудник:">
                        {getFieldDecorator('name', {
                            rules: [{ required: true,
                                message: 'Введите сотрудника'
                            }, {
                                pattern: '[a-zA-Zа-яА-Я0-9]',
                                message: 'Некорректная запись'
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        label="Пароль:">
                        {getFieldDecorator('password', {
                            rules: [{ required: true,
                                message: 'Введите пароль'
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem >
                        <Button htmlType="submit" type="primary">Добавить сотрудника</Button>
                    </FormItem>
                </Form>
            </FormWrap>
        );
    }
}

const WrappedWorkersForm = Form.create()(WorkersForm);

const mapStateToProps = (state) => ({
    workers: state.profile.userInformation.workers,
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch(addWorkers(values))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WrappedWorkersForm);