const Banner = (props) => (
    <div className="site-blocks-cover inner-page-cover overlay bg-dark" style={{ "background-image": "url(" + props.img + ")" }} data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-10">
                    <div className="row justify-content-center mb-1">
                        <div className="col-md-10 text-center">
                            <h3 className="text-center text-white">{props.title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Banner;