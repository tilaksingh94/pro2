import React, { Component } from 'react';
var Sliderbg = require('../public/images/home_2.jpg');
var gymImg = require('../public/images/gym.jpg');
var yogaImg = require('../public/images/yoga.jpeg');
var danceImg = require('../public/images/dance.jpg');
import AOS from '../node_modules/aos';
import Layout from '../components/include/Layout';
import SearchBar from '../components/SearchBar';
export default class Home extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 1000
        });
    }
    render() {
        return (
            <Layout>
                <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url(' + Sliderbg + ')' }} data-aos="fade"
                    data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-md-8 col-lg-8 col-sm-12 col-12w">
                                <div className="row justify-content-center mb-4">
                                    <div className="col-md-10 text-center">
                                        <h1 data-aos="fade-up">  Find Nearby <span className="typed-words"> Perfect Gym</span>  </h1>
                                        <p data-aos="fade-up" className=" w-75 mx-auto">Build your Health, Choose to right Gym</p>
                                    </div>
                                </div>
                                <SearchBar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section aos-init aos-animate" data-aos="fade">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center border-primary">
                                <h2 className="font-weight-light text-primary">Most Visited Places</h2>
                                <p className="color-black-opacity-5">Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-lg-4 col-lg-4">
                                <div className="listing-item">
                                    <div className="listing-image">
                                        <img src={gymImg} alt="Free Website Template by Free-Template.co" className="img-fluid" />
                                    </div>
                                    <div className="listing-item-content">
                                        <a href="listings-single.html" className="bookmark" data-toggle="tooltip" data-placement="left" title="Bookmark"><span className="icon-heart"></span></a>
                                        <a className="px-3 mb-3 category" href="#">Gym</a>
                                        <h2 className="mb-1"><a href="listings-single.html">Workout</a></h2>
                                        {/* <span className="address">West Orange, New York</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-4 col-lg-4">
                                <div className="listing-item">
                                    <div className="listing-image">
                                        <img src={yogaImg} alt="Free Website Template by Free-Template.co" className="img-fluid" />
                                    </div>
                                    <div className="listing-item-content">
                                        <a href="listings-single.html" className="bookmark"><span className="icon-heart"></span></a>
                                        <a className="px-3 mb-3 category" href="#">yoga academy</a>
                                        <h2 className="mb-1"><a href="listings-single.html">Peace of  &amp; Mind</a></h2>
                                        {/* <span className="address">Brooklyn, New York</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-4 col-lg-4">
                                <div className="listing-item">
                                    <div className="listing-image">
                                        <img src={danceImg} alt="Free Website Template by Free-Template.co" className="img-fluid" />
                                    </div>
                                    <div className="listing-item-content">
                                        <a href="listings-single.html" className="bookmark"><span className="icon-heart"></span></a>
                                        <a className="px-3 mb-3 category" href="#">Dance academy</a>
                                        <h2 className="mb-1"><a href="listings-single.html">Fitness Lover</a></h2>
                                        {/* <span className="address">West Orange, New York</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <img src={gymImg} alt="Free Website Template by Free-Template.co" className="img-fluid rounded" />
                            </div>
                            <div className="col-md-5 ml-auto">
                                <h2 className="text-primary mb-3">Why Us</h2>
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="border p-3 rounded mb-2">
                                            <a data-toggle="collapse" href="#collapse-1" role="button" aria-expanded="false" aria-controls="collapse-1" className="accordion-item h5 d-block mb-0">How to list my
                                        item?</a>
                                            <div className="collapse" id="collapse-1">
                                                <div className="pt-2">
                                                    <p className="mb-0">Far far away, behind the word mountains, far from the countries
                                                    Vokalia and Consonantia, there live the blind texts. Separated they live in
                                                    Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded mb-2">
                                            <a data-toggle="collapse" href="#collapse-4" role="button" aria-expanded="false" aria-controls="collapse-4" className="accordion-item h5 d-block mb-0">Is this available
                                        in my country?</a>
                                            <div className="collapse" id="collapse-4">
                                                <div className="pt-2">
                                                    <p className="mb-0">A small river named Duden flows by their place and supplies it
                                                    with the necessary regelialia. It is a paradisematic country, in which
                                                roasted parts of sentences fly into your mouth.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded mb-2">
                                            <a data-toggle="collapse" href="#collapse-2" role="button" aria-expanded="false" aria-controls="collapse-2" className="accordion-item h5 d-block mb-0">Is it free?</a>
                                            <div className="collapse" id="collapse-2">
                                                <div className="pt-2">
                                                    <p className="mb-0">Even the all-powerful Pointing has no control about the blind
                                                    texts it is an almost unorthographic life One day however a small line of
                                                    blind text by the name of Lorem Ipsum decided to leave for the far World of
                                                Grammar.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded mb-2">
                                            <a data-toggle="collapse" href="#collapse-3" role="button" aria-expanded="false" aria-controls="collapse-3" className="accordion-item h5 d-block mb-0">How the system
                                        works?</a>
                                            <div className="collapse" id="collapse-3">
                                                <div className="pt-2">
                                                    <p className="mb-0">The Big Oxmox advised her not to do so, because there were
                                                    thousands of bad Commas, wild Question Marks and devious Semikoli, but the
                                                    Little Blind Text didn’t listen. She packed her seven versalia, put her
                                                initial into the belt and made herself on the way.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center border-primary">
                                <h2 className="font-weight-light text-primary">How It Works</h2>
                                <p className="color-black-opacity-5">Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                                <div className="how-it-work-step">
                                    <div className="img-wrap">
                                        <img src={yogaImg} alt="Free website template by Free-Template.co" className="img-fluid"></img>
                                    </div>
                                    <span className="number">1</span>
                                    <h3>Decide What To Do</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                                <div className="how-it-work-step">
                                    <div className="img-wrap">
                                        <img src={gymImg} alt="Free website template by Free-Template.co" className="img-fluid"></img>
                                    </div>
                                    <span className="number">2</span>
                                    <h3>Find What You Want</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
                                <div className="how-it-work-step">
                                    <div className="img-wrap">
                                        <img src={danceImg} alt="Free website template by Free-Template.co" className="img-fluid"></img>
                                    </div>
                                    <span className="number">3</span>
                                    <h3>Explore Amazing Places</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
