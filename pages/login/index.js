import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox, Spin } from 'antd';
import ErrorHandling from '../../components/config/api/ErrorHandling';
import PostData from '../../components/config/api/PostData';
import { Redirect } from 'react-router-dom';
import AuthorizedGet from '../../components/config/api/AuthorizedGet';
import Layout from '../../components/include/Layout';
import Banner from '../../components/banner/index';
import Link from 'next/link'
import Router from 'next/router'


class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            ServerValidation: [],
            ServerMessage: '',
            ServerMessageType: 'error',
            loading: false,
            entity_type_id_fk: null,
            token: null,
        };
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading: true });
                PostData('login', 'POST', values).then((result) => {
                    let responseJson = result;
                    if (responseJson.success) {
                        localStorage.setItem('token', responseJson.data.token);
                        localStorage.setItem('name', responseJson.data.name);
                        localStorage.setItem('profile_stage', responseJson.data.profile_stage);
                        localStorage.setItem('entity_id_fk', responseJson.data.entity_id_fk);

                        this.setState({
                            redirectToReferrer: true,
                            ServerMessage: responseJson.message,
                            ServerMessageType: 'success',
                            entity_type_id_fk: responseJson.data.entity_type_id_fk,
                        });


                        if (responseJson.data.entity_type_id_fk == null) {
                            Router.push('/register-step-1');

                        } else if (localStorage.getItem('profile_stage') < 4 && this.state.entity_type_id_fk != 3) {
                            // window.location.href = '/tilak';
                            Router.push('/tilak');

                        }



                    } else if (responseJson.success == false) {
                        this.setState({
                            loading: false,
                            ServerMessage: responseJson.message,
                            ServerValidation: responseJson.data,
                        });
                        //values.password = null
                    }
                });
            }
        });
    };

    componentDidMount() {
        this.setState({
            token: localStorage.getItem('token')
        })
    }

    render() {
        if (this.state.redirectToReferrer) {
            Router.push('/dashboard');
        } else if (this.state.token) {
            Router.push('/dashboard');

        }
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


        let errors = '';
        if (this.state.ServerMessage) {
            errors = ErrorHandling(this.state.ServerMessage, this.state.ServerValidation, this.state.ServerMessageType);
        }

        return (<Layout>
            <Banner title={'Login'} />
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 p-5 bg-white mt-10 shadow rounded" style={{ marginTop: "-200px" }}>
                            {errors}
                            <Spin spinning={this.state.loading} size="large">

                                <Form onSubmit={this.handleSubmit} {...formItemLayout} className="login-form" >
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
                                            <Input autoFocus autoComplete=""
                                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="Email"
                                                size="large"
                                            />,
                                        )}
                                    </Form.Item >
                                    <Form.Item label="Password" hasFeedback>
                                        {getFieldDecorator('password', {
                                            rules: [
                                                { required: true, message: 'Please input your Password!' },
                                            ],
                                        })(
                                            <Input.Password
                                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                type="password"
                                                placeholder="Password"
                                                size="large"
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item wrapperCol={{
                                        xs: { span: 24, offset: 0 },
                                        sm: { span: 18, offset: 6 },
                                    }}>
                                        {getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        })(<Checkbox size="large">Remember me</Checkbox>)}
                                        <br></br>

                                        <Button type="primary" size="default" loading={this.state.loading} htmlType="submit" className="login-form-button">
                                            Log in
                                 </Button>
                                        <br></br>
                                        <a className="login-form-forgot" href="">
                                            Forgot password
                                         </a> &nbsp;
                                          Or 
                                          <Link href="/register/index"><a> Register</a></Link>
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

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;
