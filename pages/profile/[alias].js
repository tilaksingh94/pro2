import React, { Component } from 'react';
import { message, Spin, Avatar } from 'antd';
import PostGetData from '../../components/config/api/AuthorizedGet';
var banner_img = require('../../public/images/banner_img.jpg');
import { useRouter } from 'next/router'

const AliasConst = () => {
  const router = useRouter()
  return router.query

}

export default class Profile extends Component {


  constructor(props) {
    super(props);
    this.state = {
      items: [],
      alias: AliasConst,
      loading: true,
      imageUrl: null,
      name: null,
    };

  }


  async componentDidMount() {
    const alias = this.state.alias;

    const url = 'search-result/' + alias;
    this.setState({
      loading: true,
    });
    PostGetData(url, 'POST').then((result) => {
      this.setState({
        loading: false,
        // items: result.data[0],
        // imageUrl: result.data[0].image['img'],
        // name: result.data[0].name,

      })
    });
  }

  render() {
    const { imageUrl, alias, name } = this.state;

    return (
      <div>
        <div style={{ backgroundImage: 'url(' + banner_img + ')' }} className="site-blocks-cover inner-page-cover overlay bg-dark" data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-3 col-5 col-sm-5 offset-md-9 offset-sm-6  offset-2 mt-13">
                <div className="card display_img">
                  <Spin spinning={this.state.loading} >
                    <img className="card-img-top" src={imageUrl} alt={name} />
                    <div className="card-body text-center">
                      <h4 className="text-dark mb-3">{name}</h4>
                    </div>
                  </Spin>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row" >
              <div className="col-md-8 pt-4 order-md-1 order-sm-1 order-1">
                <div className="row justify-content-center mb-5">
                  <div className="col-md-7 text-center border-primary">
                    <h2 className="font-weight-light text-primary">Popular Categories {<AliasConst />}</h2>
                    <p className="color-black-opacity-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="row align-items-stretch">
                  <div className="col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                    <a href="#" className="popular-category h-100">
                      <span className="icon mb-3"><span className="flaticon-hotel"></span></span>
                      <span className="caption mb-2 d-block">Hotels</span>
                      <span className="number">4,89</span>
                    </a>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                    <a href="#" className="popular-category h-100">
                      <span className="icon mb-3"><span className="flaticon-microphone"></span></span>
                      <span className="caption mb-2 d-block">Events</span>
                      <span className="number">482</span>
                    </a>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                    <a href="#" className="popular-category h-100">
                      <span className="icon mb-3"><span className="flaticon-flower"></span></span>
                      <span className="caption mb-2 d-block">Spa</span>
                      <span className="number">194</span>
                    </a>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                    <a href="#" className="popular-category h-100">
                      <span className="icon mb-3"><span className="flaticon-restaurant"></span></span>
                      <span className="caption mb-2 d-block">Stores</span>
                      <span className="number">1,472</span>
                    </a>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                    <a href="#" className="popular-category h-100">
                      <span className="icon mb-3"><span className="flaticon-cutlery"></span></span>
                      <span className="caption mb-2 d-block">Restaurants</span>
                      <span className="number">439</span>
                    </a>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                    <a href="#" className="popular-category h-100">
                      <span className="icon mb-3"><span className="flaticon-bike"></span></span>
                      <span className="caption mb-2 d-block">Other</span>
                      <span className="number">692</span>
                    </a>
                  </div>
                </div>


              </div>
              <div className="col-md-4  order-md-12 order-sm-12 order-sm-12">
                <div className="row">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

}
