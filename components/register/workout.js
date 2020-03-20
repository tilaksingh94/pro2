import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Button, Select, Switch } from 'antd';
import PostData from '../config/api/AuthorizedPost';
import ErrorHandling from '../config/api/ErrorHandling';
import PostGetData from '../config/api/AuthorizedGet';

const { Option } = Select;

class WorkoutDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServerValidation: [],
      ServerMessage: '',
      ServerMessageType: 'error',
      loading: false,
      startup_on: null,
      WorkOutList: [],
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const DataSend = {
          services: values.services,
          onlyServices: true,

        };
        this.setState({ loading: true });
        let url = 'entity/' + localStorage.getItem('entity_id_fk');
        PostData(url, 'PUT', DataSend).then((result) => {
          let responseJson = result;
          if (responseJson.success) {
            this.setState({
              redirectToReferrer: true,
              loading: false,
              ServerMessage: responseJson.message,
              ServerMessageType: 'success'
            });
            localStorage.setItem('profile_stage', '3');
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
    PostGetData('entity-services').then((result) => {
      this.setState({
        WorkOutList: result.data
      })
    });
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const { getFieldDecorator } = this.props.form;
    let errors = '';
    if (this.state.ServerMessage) {
      errors = ErrorHandling(this.state.ServerMessage, this.state.ServerValidation, this.state.ServerMessageType);
    }

    const children = [];
    Object.entries(this.state.WorkOutList).map(([key, value]) => (
      children.push(<Option key={value.id}>{value.name}</Option>)
    ))



    return (
      <div>
        <div className="row">
          <div className="col-md-8 offset-md-2" >
            {errors}
            <br></br>
          </div>
        </div>
        <Form onSubmit={this.handleSubmit} {...formItemLayout} className="location-details-form">

          <Form.Item label="Available">
            {getFieldDecorator('services', {
              rules: [{ required: true, message: 'Please input your State/City!' }],
            })(
              <Select
                mode="multiple"
                size="large"
                placeholder="Please select"
              >
                {children}
              </Select>
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

const WorkoutDetailsForm = Form.create({ name: 'location_details' })(WorkoutDetails);
export default WorkoutDetailsForm;
