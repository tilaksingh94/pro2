import React, { Component } from 'react';
import RequestFunction from '../config/api/AuthorizedGet';
import { Tabs, Radio, message, Icon, List, Avatar } from 'antd';
import Router from 'next/router'
import Link from 'next/link'
import ProfilePicture from '../profile/ProfilePicture'
import Layout from './Layout';

const { TabPane } = Tabs
var banner_img = require('../../public/images/home_2.jpg');

class UserLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Items: [],
            error: null,
            isLoading: true,
            mode: 'top',
            token: null,
            entity_id_fk: 0
        };
    }
    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };
    async componentDidMount() {
        this.setState({
            token: localStorage.getItem('token'),
            entity_id_fk: localStorage.getItem('entity_id_fk')
        })
        document.title = "Dashboard";
        RequestFunction('entity', 'GET', null)
            .then(
                (result) => {

                    this.setState({
                        isLoading: false,
                        Items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoading: true,
                        error
                    });
                }
            );

    }

    render() {
        const { mode } = this.state;

        if (this.state.token == '') {
            Router.push('/login');

        }
        const { error, isLoading, Items } = this.state;
        let LoadHTMl = ('');
        if (error) {
            LoadHTMl = (
                <div>Error: {error.message}</div>
            );
        } else if (isLoading) {
            LoadHTMl = (
                'loadig'
            );
        } else {
            LoadHTMl = (
                Object.entries(Items).map(([key, value]) => (
                    <li className="list-group-item" key={value.id}>
                        ID: {value.id} &nbsp;
                        {/* NOTE:  {value.note} &nbsp;
                           TITLE:  {value.title} &nbsp;
                           STATUS:  {value.status} &nbsp; */}
                    </li>
                ))
            )
        }
        const data = [
            {
                img: <Avatar icon="home" style={{ backgroundColor: '#6c757d' }} />,
                title: 'Dashboard',
                to: "/dashboard",
            },
            {
                img: <Avatar icon="message" style={{ backgroundColor: '#6c757d' }} />,
                title: 'Message',
                to: "/dashboard/message",
            },
            {
                img: <Avatar icon="edit" style={{ backgroundColor: '#6c757d' }} />,
                title: 'Profile',
                to: "/dashboard/profile",
            },
            {
                img: <Avatar icon="unlock" style={{ backgroundColor: '#6c757d' }} />,
                title: 'Privicy & Security',
                to: "/dashboard/security",
            },
            {
                img: <Avatar icon="setting" style={{ backgroundColor: '#6c757d' }} />,
                title: 'Setting',
                to: "/dashboard/setting",
            },


        ];

        if (this.state.entity_id_fk != 0) {
            const key = "?ent=" + window.btoa(this.state.entity_id_fk);
            data.push(
                {
                    img: <Avatar icon="unordered-list" style={{ backgroundColor: '#6c757d' }} />,
                    title: 'Manage Listing',
                    to: "/dashboard/list" + key,
                },
                {
                    img: <Avatar icon="file-image" style={{ backgroundColor: '#6c757d' }} />,
                    title: 'Gallery',
                    to: "/dashboard/gallery" + key,
                },
                {
                    img: <Avatar icon="plus" style={{ backgroundColor: '#6c757d' }} />,
                    title: 'Create Fee',
                    to: "/dashboard/fee" + key,
                },
                {
                    img: <Avatar icon="usergroup-add" style={{ backgroundColor: '#6c757d' }} />,
                    title: 'Add Member',
                    to: "/dashboard/member" + key,
                },
            );
        }





        const columns = [
            {
                name: 'Name',
                selector: 'name',
                sortable: true,
            },
            {
                name: 'Status',
                selector: 'status',
                sortable: true,
                right: true,
            },
            {
                name: 'Date',
                selector: 'created_at',
                sortable: true,
                right: true,
            },
        ];
        return (
            <Layout>
                <div style={{ backgroundImage: 'url(' + banner_img + ')' }} class="site-blocks-cover inner-page-cover overlay bg-dark" data-aos="fade" data-stellar-background-ratio="0.5">
                    <div class="container">
                        <div class="row align-items-center justify-content-center text-center">
                            <div className="col-md-3 col-5 col-sm-5 offset-md-9 offset-sm-6  offset-2 mt-13">
                                <ProfilePicture />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="site-section">
                    <div className="container">
                        <div className="row" >
                            <div className="col-md-8 pt-4 order-md-1 order-sm-1 order-1">
                                {this.props.children}
                            </div>

                            <div className="col-md-4  order-md-12 order-sm-12 order-sm-12">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-12 col-sm-12 ml-5">
                                        <List
                                            // itemLayout="vertical"
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={item.img}
                                                        title={<Link href={item.to} title={item.title} activeClassName="active" >{item.title}</Link>}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout >
        );
    }
}
export default UserLayout;