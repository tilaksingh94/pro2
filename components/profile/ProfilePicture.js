import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import GetRequest from '../config/api/AuthorizedGet';
import PostData from '../config/api/AuthorizedPost';
import { message, Spin, Avatar } from 'antd';
import BaseURL from '../config/api/BaseUrl';

export default class ProfilePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: null,
            loading: true,
            imageUrl: null,
        };
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    }

    componentDidMount() {
        GetRequest('details', 'GET', null)
            .then(
                (result) => {
                    this.setState({
                        loading: false,
                        items: result.data,
                        imageUrl: result.data.image,
                    });
                },
                (error) => {
                    this.setState({
                        loading: false,
                        error
                    });
                }
            );
    }


    fileSelectedHandler = event => {
        const file = event.target.files[0];
        if (file) {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJpgOrPng) {
                return message.error('You can only upload JPG/PNG file!');
            } else if (!isLt2M) {
                return message.error('Image must smaller than 2MB!');
            } else {
                this.setState({
                    loading: true,
                })
                const form_data = new FormData();
                form_data.append('profile_image', event.target.files[0], event.target.files[0].name);
                form_data.append('entity_id_fk', localStorage.getItem('entity_id_fk'));
                fetch(BaseURL('UploadProfileImage'), {
                    method: 'post',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },
                    body: form_data
                })
                    .then((response) => response.json())
                    .then((res) => {
                        this.setState({
                            loading: false,
                            imageUrl: res.data.image,
                        })
                        message.success('Profile picture has been updated.');

                    })
                    .catch((error) => {
                        this.setState({
                            loading: false,
                        })
                        // console.log(error);
                        message.error(error);
                    });
            }
        }
    }
    render() {
        const { imageUrl } = this.state;
        return (

            <div className="card display_img">
                <Spin spinning={this.state.loading} >
                    <img className="card-img-top" src={imageUrl} alt="Card image" />
                    <div className="card-body text-center">
                        <input
                            style={{ display: 'none' }}
                            accept="image/*"
                            type="file" ref={fileInput => this.fileInput = fileInput} onChange={this.fileSelectedHandler} />
                        <Avatar icon="camera" onClick={() => this.fileInput.click()} className="profile_img" style={{ backgroundColor: '#096dd9' }} />
                        {/* <h4 className="text-dark mb-3">{this.state.items.name}</h4> */}
                    </div>
                </Spin>
            </div>

        )
    }
}
