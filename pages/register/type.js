import React, { Component } from 'react';
import PostGetData from '../../components/config/api/AuthorizedGet';
import PostData from '../../components/config/api/AuthorizedPost';
import { Spin, Button } from 'antd';
import Router from 'next/router'
class Register_step_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entityType: [],
            entity_type_id_fk: '',
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.UpdateFunction = this.UpdateFunction.bind(this);

    }

    handleChange(event) {
        this.setState({
            entity_type_id_fk: event.target.value,
        });
    }

    UpdateFunction() {
        this.setState({
            loading: true,
        });
        if (this.state.entity_type_id_fk !== "") {

            const DataSend = {
                entity_type_id_fk: this.state.entity_type_id_fk
            };
            PostData('UpdateUserDetails', 'POST', DataSend).then((result) => {
                let responseJson = result;
                if (responseJson.success) {
                    if (responseJson.data.entity_type_id_fk == 3) {
                        Router.push('/dashboard')
                    } else {
                        Router.push('/register/steps')
                    }
                }
            });
        } else {
            this.setState({ loading: false, });
        }
    }

    async componentDidMount() {
        PostGetData('entity-type').then((result) => {
            this.setState({
                entityType: result.data,
            })
        });
    }
    render() {
        console.log(this.state.entity_type_id_fk);

        const { entityType } = this.state;
        let entityTypeOption = ('');
        if (entityType) {
            entityTypeOption = (
                Object.entries(entityType).map(([key, value]) => (

                    <label className="radio_button_container col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-4 ">
                        <div className="popular-category h-100 ">
                            {value.name}
                            <input type="radio" name="entity_type_id_fk"
                                // checked={this.state.entity_type_id_fk === value.id}
                                onChange={this.handleChange}
                                value={value.id}
                            ></input>
                            <span className="checkmark"></span>
                        </div>
                    </label>
                ))
            )
        }
        return (
            <Spin spinning={this.state.loading} size="large">
                <div>
                    <div className="site-blocks-cover inner-page-cover overlay bg-dark" data-aos="fade" data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-md-10 ">
                                    <div className="row">
                                        {entityTypeOption}
                                    </div>
                                    <div className="row ">
                                        <div className="col-md-12 pull-right text-right">
                                            <br></br>
                                            <Button size="large" loading={this.state.loading} onClick={this.UpdateFunction}> Continue </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>
        )

    }

}





export default Register_step_1;

