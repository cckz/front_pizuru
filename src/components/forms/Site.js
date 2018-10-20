import React, { Component } from 'react';
import { Form, Input, Button, Switch, Icon } from 'antd';
import styled from "styled-components";
import { connect } from 'react-redux'
import { saveDataProfile } from '../../actions/profile'

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
                        label="Домен:"
                    >
                        {getFieldDecorator('domain', {
                            initialValue: profile.domain,
                            rules: [{ required: true,
                                message: 'Введите название вашей организации!'
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Обслуживание:"
                    >
                        {getFieldDecorator('domain_active', {
                            valuePropName: 'checked',
                            initialValue: profile.domain_active,
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

const WrappedSiteForm = Form.create()(SiteForm);

const mapStateToProps = (state) => ({
    profile: state.profile.userInformation,
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch(saveDataProfile(values))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WrappedSiteForm);
