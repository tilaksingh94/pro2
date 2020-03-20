import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Icon, Input, Button, Checkbox, Spin } from 'antd'
import ErrorHandling from '../../components/config/api/ErrorHandling'
import PostData from '../../components/config/api/PostData'
import { Redirect } from 'react-router-dom'
import Link from 'next/link'
import Layout from '../../components/include/Layout'
import Router from 'next/router'



class NormalRegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            ServerValidation: [],
            ServerMessage: '',
            ServerMessageType: 'error',
            loading: false,
            token: null,
        };
    }
    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading: true });
                PostData('register', 'POST', values).then((result) => {
                    let responseJson = result;
                    if (responseJson.success) {
                        localStorage.setItem('token', responseJson.data.token);
                        localStorage.setItem('profile_stage', responseJson.data.profile_stage);
                        localStorage.setItem('name', responseJson.data.name);
                        localStorage.setItem('entity_id_fk', responseJson.data.entity_id_fk);
                        this.setState({
                            redirectToReferrer: true,
                            ServerMessage: responseJson.message,
                            ServerMessageType: 'success'
                        });
                        if (responseJson.data.entity_type_id_fk == null) {
                            Router.push('/register/type')
                        } else if (responseJson.data.profile_stage < 4 && responseJson.data.entity_type_id_fk != 3) {
                            Router.push('register/steps')

                        } else {
                            Router.push('/dashboard')

                        }
                    } else if (responseJson.success == false) {
                        this.setState({
                            loading: false,
                            ServerMessage: responseJson.message,
                            ServerValidation: responseJson.data,
                        });
                    }
                });
            }
        });
    };
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };


    async componentDidMount() {
        this.setState({
            token: localStorage.getItem('token')
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        };
        if (this.state.redirectToReferrer || this.state.token) {
            Router.push('/dashboard');
        }

        let errors = '';
        if (this.state.ServerMessage) {
            errors = ErrorHandling(this.state.ServerMessage, this.state.ServerValidation, this.state.ServerMessageType);
        }

        return (<Layout>
            <div className="site-blocks-cover inner-page-cover overlay bg-dark" data-aos="fade" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-10">
                            <div className="row justify-content-center mb-1">
                                <div className="col-md-10 text-center">
                                    <h3 className="text-center text-white"> Create your  Account</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 p-5 bg-white mt-10 shadow rounded" style={{ marginTop: "-200px" }}>
                            {errors}
                            <Spin spinning={this.state.loading} size="large">
                                <Form onSubmit={this.handleSubmit} {...formItemLayout} className="login-form" >
                                    <Form.Item label="Name" hasFeedback>
                                        {getFieldDecorator('name', {
                                            rules: [

                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ],
                                        })(
                                            <Input autoFocus autoComplete=""
                                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="Name"
                                                size="large"
                                            />,
                                        )}
                                    </Form.Item >
                                    <Form.Item label="E-mail" hasFeedback>
                                        {getFieldDecorator('email', {
                                            rules: [
                                                {
                                                    type: 'email',
                                                    message: 'The input is not valid E-mail!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your E-mail!',
                                                },
                                            ],
                                        })(
                                            <Input autoComplete=""
                                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="Email"
                                                size="large"
                                            />,
                                        )}
                                    </Form.Item >
                                    <Form.Item label="Password" hasFeedback>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }, {
                                                validator: this.validateToNextPassword,
                                            },],
                                        })(
                                            <Input.Password
                                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                type="password"
                                                placeholder="Password"
                                                size="large"
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Confirm" hasFeedback>
                                        {getFieldDecorator('confirm', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please confirm your password!',
                                                },
                                                {
                                                    validator: this.compareToFirstPassword,
                                                },
                                            ],
                                        })(<Input.Password onBlur={this.handleConfirmBlur}
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="Confirm Password" size="large" />)}
                                    </Form.Item>
                                    <Form.Item wrapperCol={{
                                        xs: { span: 24, offset: 0 },
                                        sm: { span: 20, offset: 6 },
                                    }}>


                                        <Button type="primary" size="default" loading={this.state.loading} htmlType="submit" className="login-form-button">
                                            Register
                                 </Button>
                                        <br></br>

                                        Or do you have an account, click here <Link href="/login"><a >Login</a></Link>

                                    </Form.Item>
                                </Form>
                            </Spin>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'get_started' })(NormalRegisterForm);
export default WrappedNormalLoginForm;
