import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Button, Select, Switch, TimePicker } from 'antd';
import PostData from '../config/api/AuthorizedPost';
import ErrorHandling from '../config/api/ErrorHandling';
import PostGetData from '../config/api/AuthorizedGet';



class TimeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServerValidation: [],
      ServerMessage: '',
      ServerMessageType: 'error',
      loading: false,
    };
  }

  timeFormate(hoursVar) {
    if (hoursVar != "" && hoursVar != null) {
      return hoursVar.format('HH:mm:ss');
    } else {
      return null;
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {




        this.setState({ loading: true });
        values['entity_id_fk'] = localStorage.getItem('entity_id_fk');
        values['sunday_start'] = this.timeFormate(values['sunday_start']);
        values['sunday_end'] = this.timeFormate(values['sunday_end']);
        values['monday_start'] = this.timeFormate(values['monday_start']);
        values['monday_end'] = this.timeFormate(values['monday_end']);
        values['tuesday_start'] = this.timeFormate(values['tuesday_start']);
        values['tuesday_end'] = this.timeFormate(values['tuesday_end']);
        values['wednesday_start'] = this.timeFormate(values['wednesday_start']);
        values['wednesday_end'] = this.timeFormate(values['wednesday_end']);
        values['thursday_start'] = this.timeFormate(values['thursday_start']);
        values['thursday_end'] = this.timeFormate(values['thursday_end']);
        values['friday_start'] = this.timeFormate(values['friday_start']);
        values['friday_end'] = this.timeFormate(values['friday_end']);
        values['saturday_start'] = this.timeFormate(values['saturday_start']);
        values['saturday_end'] = this.timeFormate(values['saturday_end']);




        console.log(values);
        PostData('entity-hours', 'POST', values).then((result) => {
          let responseJson = result;
          if (responseJson.success) {
            this.setState({
              redirectToReferrer: true,
              loading: false,
              ServerMessage: responseJson.message,
              ServerMessageType: 'success'
            });
            localStorage.setItem('profile_stage', '4');

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
        xs: { span: 12 },
        sm: { span: 12 },
      },
      wrapperCol: {
        xs: { span: 12 },
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
          <div className="col-md-8 offset-md-2" >
            {errors}
            <br></br>
          </div>
        </div>

        <Form onSubmit={this.handleSubmit} {...formItemLayout} className="location-details-form">
          <div className="row">
            <div className="col-md-3">
              <Form.Item label="Monday">
                {getFieldDecorator('monday')(<Switch checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />} />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="Start Time">
                {getFieldDecorator('monday_start')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="End Time">
                {getFieldDecorator('monday_end')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Form.Item label="Tuesday">
                {getFieldDecorator('tuesday')(<Switch checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />} />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="Start Time">
                {getFieldDecorator('tuesday_start')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="End Time">
                {getFieldDecorator('tuesday_end')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Form.Item label="Wednesday">
                {getFieldDecorator('wednesday')(<Switch checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />} />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="Start Time">
                {getFieldDecorator('wednesday_start')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="End Time">
                {getFieldDecorator('wednesday_end')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Form.Item label="Thursday">
                {getFieldDecorator('thursday')(<Switch checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />} />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="Start Time">
                {getFieldDecorator('thursday_start')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="End Time">
                {getFieldDecorator('thursday_end')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Form.Item label="Friday">
                {getFieldDecorator('friday')(<Switch checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />} />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="Start Time">
                {getFieldDecorator('friday_start')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="End Time">
                {getFieldDecorator('friday_end')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Form.Item label="Saturday">
                {getFieldDecorator('saturday')(<Switch checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />} />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="Start Time">
                {getFieldDecorator('saturday_start')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="End Time">
                {getFieldDecorator('saturday_end')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Form.Item label="Sunday">
                {getFieldDecorator('sunday')(<Switch checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />} />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="Start Time">
                {getFieldDecorator('sunday_start')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item label="End Time">
                {getFieldDecorator('sunday_end')(<TimePicker use12Hours format="h:mm A" />)}
              </Form.Item>
            </div>
          </div>
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
const TimeDetailsForm = Form.create({ name: 'location_details' })(TimeDetails);
export default TimeDetailsForm;
