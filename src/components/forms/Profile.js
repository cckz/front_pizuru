import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styled from "styled-components";
import { connect } from 'react-redux'
import { profile } from '../../actions/profile'

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
                console.log(values)
            }
            console.log(err)
        });
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
                            rules: [{ required: true,
                                      message: 'Введите название вашей организации!'
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Контактный телефон:">
                        {getFieldDecorator('phone', {
                            rules: [{ pattern: '^[0-9]*$',
                                      message: 'Введите телефон в правильном формате!'
                            }],
                        })(
                            <Input  />
                        )}
                    </FormItem>
                    <FormItem label="Город:">
                        {getFieldDecorator('city', {
                            rules: [{ pattern: '^[a-zA-Zfа-яА-Я ]*$',
                                      message: 'Неверный формат!'
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Адрес:">
                        {getFieldDecorator('address', {
                            rules: [{ pattern: '^[a-zA-Zа-яА-Я0-9 ,.]*$',
                                      message: 'Неверный формат!'
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Дополнительная информация:">
                        {getFieldDecorator('more_info', {
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

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch(profile(values))
    }
})

export default connect(null, mapDispatchToProps)(WrappedProfileForm);