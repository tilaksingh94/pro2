import React, { Component } from 'react';
import Router from 'next/router'
import Layout from '../../components/include/Layout';

import StepsRoute from '../../components/register/steps_route'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_stage: null,
            steps: []
        };
    }
    async componentDidMount() {
        this.setState({
            profile_stage: Number(localStorage.getItem('profile_stage')),
        })
    }

    next() {
        const profile_stage = this.state.profile_stage + 1;
        this.setState({ profile_stage });
    }

    prev() {
        const profile_stage = this.state.profile_stage - 1;
        this.setState({ profile_stage });
    }





    render() {
        const { profile_stage, steps } = this.state;
        if (this.state.profile_stage == 4) {
            Router.push('/dashboard')
        }
        return (
            <Layout>
                <div className="site-blocks-cover inner-page-cover overlay bg-dark" data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-md-10">
                                <div className="row justify-content-center mb-1">
                                    <div className="col-md-10 ">
                                        <h2 data-aos="fade-up" className="text-white">
                                            Complete your profile
                                          </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1 p-5 bg-white mt-10 shadow rounded" style={{ "margin-top": "-200px" }}>
                                <StepsRoute profile_stage={profile_stage}/>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        );
    }
}

