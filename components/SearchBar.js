import React, { Component } from 'react';
import PostGetData from './config/api/AuthorizedGet';
import PostData from './config/api/AuthorizedPost';
import { List, Button, Avatar } from 'antd';
import Link from 'next/link'
import Router from 'next/router'

export default class ProfilePicture extends Component {
    constructor(props) {
        super(props);
        this.timeout = 0;
        this.state = {
            items: [],
            error: null,
            loading: false,
            search: '',
            StateList: [],
            resultBoxProp: 'none',
        };

        this.onSubmitFun = this.onSubmitFun.bind(this)
        this.OnchangeHandller = this.OnchangeHandller.bind(this);

    }

    OnchangeHandller(evt) {
        var key = evt.target.value;
        if (key.length > 1) {
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.setState({
                    search: key,
                });
                this.SearchBarFun(key);
            }, 500);

        } else {
            this.setState({
                loading: false,
                resultBoxProp: 'none',
                items: [],
            })
        }
    }

    SearchBarFun(query = null) {
        let url = 'search?q=' + query;
        PostGetData(url, 'POST').then((result) => {
            this.setState({
                loading: false,
                resultBoxProp: '',
                items: result.data,
            })
        });

    }


    onSubmitFun(event) {
        event.preventDefault();
        var searchKey = this.state.search;
        if (searchKey.length > 1) {
            const url = '/search?q=' + searchKey + '&filter=';
            Router.push(url);
        }
    }
    render() {
        // console.log(th\is.state.items);
        const resultData = this.state.items;

        const SearchData = [];
        // console.log(SearchData);
        if (resultData != '') {

            Object.entries(resultData).map(([key, value]) => (
                SearchData.push(
                    {
                        title: value.name,
                    }
                )

            ))
        }


        return (
            <div className="form-search-wrap p-2 shadow" data-aos="fade-up" data-aos-delay="200">
                <form method="get" ref="searchForm" action="search" onSubmit={event => this.onSubmitFun(event)}>
                    <div className="row align-items-center">
                        <div className="col-lg-10 col-xl-10 col-md-10 col-9 no-sm-border">
                            <div className="wrap-icon">

                                <input type="text" autoComplete="on"
                                    className="form-control"
                                    name="q"
                                    style={{ color: '#6c757d' }}
                                    onChange={evt => this.OnchangeHandller(evt)}
                                    autoComplete='off'
                                    placeholder="Looking for perfect gym for you !" />

                            </div>
                            <div className="col-md-12 col-sm-12 col-12 col-lg-12 shadow rounded text-left p-3 mt-1"
                                style={{
                                    position: 'absolute',
                                    backgroundColor: '#ffff',
                                    maxHeight: '250px',
                                    overflow: 'hidden',
                                    overflowY: 'scroll',
                                    display: this.state.resultBoxProp
                                }}>
                                <List dataSource={SearchData}
                                    size="small"
                                    loadMore
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={
                                                    <Link href={'search?s=' + item.title}>{item.title}</Link>
                                                }
                                            />
                                        </List.Item>
                                    )}
                                />
                            </div>

                        </div>
                        <div className="col-lg-2 col-xl-2 col-md-2 col-1 text-right" >
                            <button type="submit" className="btn" >
                                <span className="icon icon-search"></span>
                            </button>
                        </div>


                    </div>
                </form>
            </div>
        )
    }

}



