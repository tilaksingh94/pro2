import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, DatePicker } from 'antd';
import PostData from '../config/api/AuthorizedPost';
import ErrorHandling from '../config/api/ErrorHandling';

class BasicDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServerValidation: [],
      ServerMessage: '',
      ServerMessageType: 'error',
      loading: false,
      startup_on: null,
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const DataSend = {
          name: values.name,
          startup_on: values.startup_on.format('YYYY-MM-DD'),
        };
        this.setState({ loading: true });
        PostData('entity', 'POST', DataSend).then((result) => {
          let responseJson = result;
          if (responseJson.success) {
            this.setState({
              redirectToReferrer: true,
              loading: false,
              ServerMessage: responseJson.message,
              ServerMessageType: 'success'
            });

            localStorage.setItem('entity_id_fk', responseJson.data.id);
            localStorage.setItem('profile_stage', '1');
            window.location.reload(false);
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

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const { getFieldDecorator } = this.props.form;
    let errors = '';
    if (this.state.ServerMessage) {
      errors = ErrorHandling(this.state.ServerMessage, this.state.ServerValidation, this.state.ServerMessageType);
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-2" >
            {errors}
            <br></br>
          </div>
        </div>
        <Form onSubmit={this.handleSubmit} {...formItemLayout} className="basic-details-form">
          <Form.Item label="Name">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!' }],
            })(
              <Input
                size="large"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Name"
              />,
            )}
          </Form.Item>
          <Form.Item label="Startup On">
            {getFieldDecorator('startup_on', {
              rules: [{ type: 'object', required: true, message: 'Please select Startup Date!' }],
            })(<DatePicker size="large" />)}
          </Form.Item>
          <Form.Item wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 20, offset: 4 },
          }}>
            <Button type="primary" size="default" loading={this.state.loading} htmlType="submit" className="login-form-button">
              Save
             </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const BasicDetailsForm = Form.create({ name: 'basic_details' })(BasicDetails);
export default BasicDetailsForm;
