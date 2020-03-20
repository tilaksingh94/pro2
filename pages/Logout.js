import React, { Component } from 'react';
import BaseURL from './../components/config/api/BaseUrl';
import { Redirect } from 'react-router-dom';
import Router from 'next/router'

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logOut: false,
        };
    }
    async componentDidMount() {
        if (!localStorage.setItem('token', '')) {
          this.setState({
              logOut: true,
          })
        }
        await fetch(BaseURL('logout'), {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: null,
        })
            .then((resp) => resp.json())
            .then(function (result) {
                if (result.success) {
                    localStorage.setItem('token', '')
                    localStorage.setItem('profile_stage', '')
                    localStorage.setItem('profile_stage', '')
                    this.setState({
                        logOut: true,
                    });
                }
            })
    if (this.state.logOut) {
            Router.push('/');
        }
    }
    render() {
        return '';
    }
}

export default Logout;
