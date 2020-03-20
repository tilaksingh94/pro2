import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
// import '../react-image-crop/dist/ReactCrop.css';
import { Modal, message, Spin, Avatar } from 'antd';
import BaseURL from './api/BaseUrl';


export default class Cropper extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            src: null,
            loading: false,
            visible: false,
            crop: {
                unit: '%',
                width: 85,
                aspect: 16 / 12,
            },
        };
        this.uploadCroppedPicture = this.uploadCroppedPicture.bind(this);
    }



    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState({
                    src: reader.result,
                    visible: true,
                })
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    onImageLoaded = image => {
        this.imageRef = image;
    };

    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };

    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop });
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                'newFile.jpeg'
            );
            this.setState({ croppedImageUrl });

        }
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return canvas.toDataURL('image/jpeg');

        // return new Promise((resolve, reject) => {
        //     canvas.toBlob(blob => {
        //         if (!blob) {
        //             //reject(new Error('Canvas is empty'));
        //             console.error('Canvas is empty');
        //             return;
        //         }

        //         blob.name = fileName;
        //         window.URL.revokeObjectURL(this.fileUrl);
        //         this.fileUrl = window.URL.createObjectURL(blob);
        //         resolve(this.fileUrl);
        //     }, 'image/jpeg');
        // });
    }



    uploadCroppedPicture() {
        this.setState({
            loading: true,
        })
        const param = this.props.param;
        var formData = new FormData();
        formData.append('galleryType', param[0].galleryType);
        formData.append('ent', param[0].ent);
        formData.append('image', this.state.croppedImageUrl);
        fetch(BaseURL('UploadGalleryImage'), {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
            body: formData
        })
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    loading: false,
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
        // console.log(formData);
        // console.log(param[0]);
        // console.log(this.state.src);


    }

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { visible, crop, croppedImageUrl, src } = this.state;

        return (

            <div className="row">
                <div className="col-md-12">

                    <input type="file"
                        accept="image/*" ref={fileInput => this.fileInput = fileInput}
                        style={{ display: 'none' }}
                        onChange={this.onSelectFile} />
                    <button className="btn btn-dark text-white btn-sm rounded" onClick={() => this.fileInput.click()}><i className="fa fa-camera"> </i> Upload</button>
                    <Modal
                        title="Upload Image"
                        visible={visible}
                        onCancel={this.handleCancel}
                        width="85%"
                        footer={false}
                        loading={this.state.loading}
                    >
                        <div className="row">

                            <div className="col-md-6 mt-1 border-right">
                                <h5>Original</h5>


                                {src && (
                                    <ReactCrop
                                        className="rounded"
                                        src={src}
                                        crop={crop}
                                        ruleOfThirds
                                        onImageLoaded={this.onImageLoaded}
                                        onComplete={this.onCropComplete}
                                        onChange={this.onCropChange}
                                    />
                                )}

                            </div>
                            <div className="col-md-6">
                                <h5>Cropped</h5>

                                {croppedImageUrl && (
                                    <img alt="Crop" className="img rounded" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
                                )}

                                <h5>&nbsp;</h5>
                                <button className="btn btn-dark text-white btn-sm rounded" onClick={() => this.fileInput.click()}><i className="fa fa-camera"> </i> Select Picture </button>
                                &nbsp;

                                <button className="btn btn-dark text-white btn-sm rounded" ><i className="fa fa-upload"> </i> Upload Original</button>
                                &nbsp;

                                <button className="btn btn-dark text-white btn-sm rounded" onClick={this.uploadCroppedPicture}><i className="fa fa-upload"> </i> Upload Cropped</button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

