import React, { Component } from 'react';
import Layout from '../components/include/Layout';
import Banner from '../components/banner/index';

function Contact() {
    return (
        <Layout>
            <Banner title={'tilak'} img={require('../public/images/gym.jpg')} />
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 mb-5 aos-init aos-animate" data-aos="fade">
                            <form action="#" className="p-5 bg-white" style={{ "margin-top": "-150px" }}>
                                <div className="row form-group">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="text-black" for="fname">First Name</label>
                                        <input type="text" id="fname" className="form-control"></input>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="text-black" for="lname">Last Name</label>
                                        <input type="text" id="lname" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" for="email">Email</label>
                                        <input type="email" id="email" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" for="subject">Subject</label>
                                        <input type="subject" id="subject" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" for="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input type="submit" value="Send Message" className="btn btn-primary btn-md text-white"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 aos-init aos-animate" data-aos="fade" data-aos-delay="100">
                            <div className="p-4 mb-3 bg-white">
                                <p className="mb-0 font-weight-bold">Address</p>
                                <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                <p className="mb-0 font-weight-bold">Phone</p>
                                <p className="mb-4"><a href="#">+1 232 3235 324</a></p>
                                <p className="mb-0 font-weight-bold">Email Address</p>
                                <p className="mb-0"><a href="#"><span className="__cf_email__" data-cfemail="a0d9cfd5d2c5cdc1c9cce0c4cfcdc1c9ce8ec3cfcd">[email&nbsp;protected]</span></a>
                                </p>
                            </div>
                            <div className="p-4 mb-3 bg-white">
                                <h3 className="h5 text-black mb-3">More Info</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia
                                architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat
                            quaerat eos qui, libero neque sed nulla.</p>
                                <p><a href="#" className="btn btn-primary px-4 py-2 text-white">Learn More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default Contact;
