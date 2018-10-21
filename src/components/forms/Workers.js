import React, { Component } from 'react';
import { Form, Input, Button, List, Icon } from 'antd';
import styled from "styled-components";
import { connect } from 'react-redux'

import { addWorkers, deleteWorkers } from '../../actions/profile'

const FormWrap = styled.div`
  width: 70%
`

const TitleWorkers = styled.h4`
  margin-bottom: 10px;
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
        const { workers, hundleDeleteWorker } = this.props
        const { getFieldDecorator } = this.props.form;
        console.log(workers)
        return (
            <FormWrap>
                {workers.length > 0 ?
                    <div>
                        <TitleWorkers>Список сотрудников:</TitleWorkers>
                        <List
                            //loading={true}
                            dataSource={workers}
                            renderItem={worker => (
                                <List.Item
                                    actions={[
                                        <a onClick={() => {hundleDeleteWorker(worker)}}>
                                            <Icon type="close" />
                                        </a>]}
                                >
                                    <List.Item.Meta
                                        title={worker.name}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    : ""
                }
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
    },
    hundleDeleteWorker: (worker) => {
        dispatch(deleteWorkers(worker))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WrappedWorkersForm);