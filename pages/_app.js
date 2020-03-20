import '../public/fonts/icomoon/style.css'
import "../public/css/bootstrap.min.css"
// import "../public/css/magnific-popup.css"
import "../public/css/owl.carousel.min.css"
// import "../public/css/owl.theme.default.min.css"
// import "../public/css/rangeslider.css"
import "../public/fonts/flaticon/font/flaticon.css"
import "../public/css/style.css"
import '../node_modules/aos/dist/aos.css';
import '../node_modules/react-image-crop/dist/ReactCrop.css'
import '../node_modules/antd/dist/antd.css';

import ProgressBar from '../components/progress_bar/progress'


export default function MyApp({ Component, pageProps }) {
    return <div><ProgressBar /><Component {...pageProps} /></div>
}