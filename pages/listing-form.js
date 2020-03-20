import React, { Component } from 'react';
function About() {
    return (
        <div>
            <div class="site-blocks-cover inner-page-cover overlay bg-dark" style={{ "background-image": "url(images/hero_1.jpg)" }} data-aos="fade" data-stellar-background-ratio="0.5">
                <div class="container">
                    <div class="row align-items-center justify-content-center text-center">
                        <div class="col-md-10">
                            <div class="row justify-content-center mb-1">
                                <div class="col-md-10 text-center">
                                    <h1 data-aos="fade-up">  GYM <span class="typed-words">At Nearby You</span>  </h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mb-5">
                            <form action="#" class="p-5 bg-white" style={{ "margin-top": "-150px" }}>
                                <div class="row form-group">
                                    <div class="col-md-6 mb-3 mb-md-0">
                                        <label class="text-black" for="fname">First Name</label>
                                        <input type="text" id="fname" class="form-control"></input>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="text-black" for="lname">Last Name</label>
                                        <input type="text" id="lname" class="form-control"></input>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" for="email">Email</label>
                                        <input type="email" id="email" class="form-control"></input>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" for="pass1">Password</label>
                                        <input type="password" id="pass1" class="form-control"></input>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" for="pass2">Re-type Password</label>
                                        <input type="password" id="pass2" class="form-control"></input>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <input type="submit" value="Sign Up" class="btn btn-primary btn-md text-white"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6 mb-5">
                            <form action="#" class="p-5 bg-white" style={{ "margin-top": "-150px" }}>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" for="email">Email</label>
                                        <input type="email" id="email2" class="form-control"></input>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" for="pass1">Password</label>
                                        <input type="password" id="pass3" class="form-control"></input>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <input type="submit" value="Log In" class="btn btn-primary btn-md text-white"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
