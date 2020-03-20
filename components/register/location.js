import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Select, Cascader } from 'antd';
import PostData from '../config/api/AuthorizedPost';
import ErrorHandling from '../config/api/ErrorHandling';
import PostGetData from '../config/api/AuthorizedGet';

const { Option } = Select;

class LocationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServerValidation: [],
      ServerMessage: '',
      ServerMessageType: 'error',
      loading: false,
      startup_on: null,
      StateList: [],
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });

        const DataSend = {
          entity_id_fk: localStorage.getItem('entity_id_fk'),
          phone_number: values.phone_number,
          pincode: values.pincode,
          address: values.address,
          state_city: values.state_city,
        };
        //console.log(DataSend);

        PostData('entity-location', 'POST', DataSend).then((result) => {
          let responseJson = result;
          if (responseJson.success) {
            this.setState({
              redirectToReferrer: true,
              loading: false,
              ServerMessage: responseJson.message,
              ServerMessageType: 'success'
            });
            localStorage.setItem('profile_stage', '2');
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

  componentDidMount() {
    PostGetData('state_and_city').then((result) => {
      this.setState({
        StateList: result.data
      })
    });
  }

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

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '91',
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
      </Select>,
    );



    return (
      <div>
        <div className="row">
          <div className="col-md-8 offset-md-2" >
            {errors}
            <br></br>
          </div>
        </div>
        <Form onSubmit={this.handleSubmit} {...formItemLayout} className="location-details-form">
          <Form.Item label="Address">
            {getFieldDecorator('address', {
              rules: [{ required: true, message: 'Please input your Address!' }],
            })(
              <Input
                size="large"
                prefix={<Icon type="shop" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Address"
              />,
            )}
          </Form.Item>
          <Form.Item label="Phone Number">
            {getFieldDecorator('phone_number', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input size="large" addonBefore={prefixSelector} />)}
          </Form.Item>
          <Form.Item label="Pincode">
            {getFieldDecorator('pincode', {
              rules: [{ required: true, message: 'Please input your pincode!' }],
            })(<Input size="large" placeholder="Pincode" style={{ width: '120px' }} />)}
          </Form.Item>

          <Form.Item label="State/City">
            {getFieldDecorator('state_city', {
              rules: [{ required: true, message: 'Please input your State/City!' }],
            })(
              <Cascader
                size="large"
                options={this.state.StateList}
                placeholder="Please select state/city" />
            )}
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

const LocationDetailsForm = Form.create({ name: 'location_details' })(LocationDetails);
export default LocationDetailsForm;
