import React, { Component } from 'react';
import PostGetData from '../components/config/api/AuthorizedGet';
import PostData from '../components/config/api/AuthorizedPost';
import { List, Button, Avatar, Skeleton } from 'antd';
import Layout from '../components/include/Layout';
import Router from 'next/router'
import Link from 'next/link'
export default class Listing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: null,
            loading: false,
            search: '',
        };
        this.OnchangeHandller = this.OnchangeHandller.bind(this);
    }

    componentDidMount() {
        const { query } = Router;
        this.SearchBarFun(query.q);
        this.setState({
            search: query.q,
        });
    }

    OnchangeHandller(evt) {
        var key = evt.target.value;
        if (key.length > 1) {
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.setState({
                    search: key,

                });
                // this.SearchBarFun(key);
            }, 500);

        }
        //  else {
        //     this.setState({
        //         loading: false,
        //         resultBoxProp: 'none',
        //         items: [],
        //     })
        // }
    }
    SearchBarFun(query = null) {
        let url = 'search-result?q=' + query;
        console.log(query);
        this.setState({
            loading: true,
        })
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
            // console.log(url);
            this.SearchBarFun(searchKey);
            Router.push(url);
        }
    }
    render() {
        const resultData = this.state.items;
        return (
            <Layout>
                <div className="site-blocks-cover inner-page-cover overlay bg-dark" style={{ backgroundImage: "url(images/hero_1.jpg)" }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-md-8">
                                <div className="row justify-content-center mb-1">
                                    <div className="col-md-10 text-center">
                                        <h1 data-aos="fade-up">  Find Nearby <span className="typed-words">Attractive</span>  </h1>

                                    </div>
                                </div>
                                <div className="form-search-wrap p-1" data-aos="fade-up" data-aos-delay="200">
                                    <form method="get" ref="searchForm" action="search" onSubmit={event => this.onSubmitFun(event)}>                                        <div className="row align-items-center">
                                        <div className="col-lg-12 col-xl-10 no-sm-border b">
                                            <div className="wrap-icon">
                                                <input type="text"
                                                    autoComplete="off"
                                                    className="form-control"
                                                    name="q"
                                                    defaultValue={this.state.search}
                                                    onChange={evt => this.OnchangeHandller(evt)}
                                                    placeholder="Looking for perfect gym for you !">
                                                </input>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-xl-2 ml-auto text-right">
                                            <button type="submit" className="btn" >
                                                <span className="icon icon-search"></span>
                                            </button>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <Skeleton avatar paragraph={{ rows: 4 }} loading={this.state.loading} >
                                    {resultData ? Object.entries(resultData).map(([key, value]) => (
                                        <div className="d-block d-md-flex listing-horizontal">
                                            <a href="#" className="img d-block" style={{ backgroundImage: 'url("' + value.image.img + '")' }}>
                                                <span className="category">{value.category}</span>
                                            </a>
                                            <div className="lh-content">
                                                <a href="#" className="bookmark"><span className="icon-heart"></span></a>
                                                <h3>
                                                    <Link 
                                                    href={'/profile/[alias]'}
                                                    as={'/profile/' + value.alias}
                                                    ><a>{value.name}</a></Link>
                                                    
                                                    </h3>
                                                <p>
                                                    {value.location.locality}, &nbsp;
                                                    {value.location.city}, &nbsp;
                                                    {value.location.state}

                                                </p>
                                                <p>
                                                    <span class="icon-star text-warning"></span>
                                                    <span class="icon-star text-warning"></span>
                                                    <span class="icon-star text-warning"></span>
                                                    <span class="icon-star text-warning"></span>
                                                    <span class="icon-star text-secondary"></span>
                                                    <span>(48 Reviews)</span>
                                                </p>
                                            </div>
                                        </div>


                                    ))
                                        : '<div className="col-12 mt-5 text-center">No Result Found!</div>'
                                    }
                                    {/* <div className="col-12 mt-5 text-center">
                                        <div className="custom-pagination">
                                            <span>1</span>
                                            <a href="#">2</a>
                                            <a href="#">3</a>
                                            <span className="more-page">...</span>
                                            <a href="#">10</a>
                                        </div>
                                    </div> */}
                                </Skeleton>
                            </div>


                            <div className="col-lg-3 ml-auto">
                                <div className="mb-5">
                                    <h3 className="h5 text-black mb-3">Filters</h3>
                                    <form action="#" method="post">
                                        <div className="form-group">
                                            <input type="text" placeholder="What are you looking for?" className="form-control"></input>
                                        </div>
                                        <div className="form-group">
                                            <div className="select-wrap">
                                                <span className="icon"><span className="icon-keyboard_arrow_down"></span></span>
                                                <select className="form-control" name="" id="">
                                                    <option value="">All Categories</option>
                                                    <option value="">Appartment</option>
                                                    <option value="">Restaurant</option>
                                                    <option value="">Eat &amp; Drink</option>
                                                    <option value="">Events</option>
                                                    <option value="">Fitness</option>
                                                    <option value="">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="wrap-icon">
                                                <span className="icon icon-room"></span>
                                                <input type="text" placeholder="Location" className="form-control"></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="mb-5">
                                    <form action="#" method="post">
                                        <div className="form-group">
                                            <p>Radius around selected destination</p>
                                        </div>
                                        <div className="form-group">
                                            <input type="range" min="0" max="100" value="20" data-rangeslider="" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", opacity: "0" }}>
                                            </input>
                                        </div>
                                    </form>
                                </div>
                                <div className="mb-5">
                                    <form action="#" method="post">
                                        <div className="form-group">
                                            <p>Category </p>
                                        </div>
                                        <div className="form-group">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <label htmlFor="option1">
                                                        <input type="checkbox" id="option1"></input>
                                                        Gym
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor="option2">
                                                        <input type="checkbox" id="option2"></input>
                                                        Vegetarian
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor="option3">
                                                        <input type="checkbox" id="option3"></input>
                                                        Vegan Foods
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor="option4">
                                                        <input type="checkbox" id="option4"></input>
                                                        Sea Foods
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>)


    }
}

