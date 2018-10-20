import React, { Component } from 'react';
import { Form, Button, Switch, Icon } from 'antd';
import styled from "styled-components";
import { connect } from 'react-redux'

import { saveDataProfile } from '../../actions/profile'

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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                this.props.onSubmit(values)
            }
        });
    }

    render() {
        const { formLayout } = this.state;
        const formItemLayout = {
            labelCol: { span: 21 },
            wrapperCol: { span: 3 },
        };
        const { profile } = this.props
        const { getFieldDecorator } = this.props.form;
        return (
            <FormWrap>
                <Form layout={formLayout}
                      onSubmit={this.handleSubmit}
                >
                    <FormItem
                        {...formItemLayout}
                        label="Новости / Блог:"
                    >
                        {getFieldDecorator('news_blog', {
                            valuePropName: 'checked',
                            initialValue: profile.news_blog,
                        })(
                            <Switch
                                checkedChildren={<Icon type="check" />}
                                unCheckedChildren={<Icon type="close" />}
                            />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Акции / Скидки:"
                    >
                        {getFieldDecorator('stock_discounts', {
                            valuePropName: 'checked',
                            initialValue: profile.stock_discounts,
                        })(
                            <Switch
                                checkedChildren={<Icon type="check" />}
                                unCheckedChildren={<Icon type="close" />}
                            />
                        )}
                    </FormItem>
                    <FormItem >
                        <Button htmlType="submit" type="primary">Сохранить</Button>
                    </FormItem>
                </Form>
            </FormWrap>
        );
    }
}

const WrappedNotificationsForm = Form.create()(NotificationsForm);

const mapStateToProps = (state) => ({
    profile: state.profile.userInformation,
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch(saveDataProfile(values))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNotificationsForm);