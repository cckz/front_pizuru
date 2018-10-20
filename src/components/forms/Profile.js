import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styled from "styled-components";
import { connect } from 'react-redux'
import { saveDataProfile } from '../../actions/profile'

const FormWrap = styled.div`
  width: 70%
`

const FormItem = Form.Item;

class ProfileForm extends Component {
    state = {
        formLayout: 'vertical',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values)
            }
        });
    }

    getInitialValues = (field) => {
        const { profile } = this.props
        if (profile) {
            return profile[field]
        }
    }

    render() {
        const { formLayout } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <FormWrap>
                <Form layout={formLayout}
                      onSubmit={this.handleSubmit}
                >
                    <FormItem label="Организация:">
                        {getFieldDecorator('title_org', {
                            initialValue: this.getInitialValues('title_org'),
                            rules: [{ required: true,
                                      message: 'Введите название вашей организации!'
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Контактный телефон:">
                        {getFieldDecorator('phone', {
                            initialValue: this.getInitialValues('phone'),
                            rules: [{ pattern: '^[0-9]*$',
                                      message: 'Введите телефон в правильном формате!'
                            }],
                        })(
                            <Input  />
                        )}
                    </FormItem>
                    <FormItem label="Город:">
                        {getFieldDecorator('city', {
                            initialValue: this.getInitialValues('city'),
                            rules: [{ pattern: '^[a-zA-Zfа-яА-Я ]*$',
                                      message: 'Неверный формат!'
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Адрес:">
                        {getFieldDecorator('address', {
                            initialValue: this.getInitialValues('address'),
                            rules: [{ pattern: '^[a-zA-Zа-яА-Я0-9 ,.]*$',
                                      message: 'Неверный формат!'
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Дополнительная информация:">
                        {getFieldDecorator('more_info', {
                            initialValue: this.getInitialValues('more_info'),
                            rules: [],
                        })(
                            <Input.TextArea rows={4} />
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

const WrappedProfileForm = Form.create()(ProfileForm);

const mapStateToProps = (state) => ({
    profile: state.profile.userInformation,
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch(saveDataProfile(values))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WrappedProfileForm);