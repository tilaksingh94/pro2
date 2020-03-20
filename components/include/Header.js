import Link from 'next/link'
export default function Header() {
    return (
        <div className="site-wrap">
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"><ul className="site-nav-wrap">
                    <li className="active"><Link href="/"><a><span>Home</span></a></Link></li>
                    {/* <li className="has-children"><span className="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem0"></span>
                        <a href="about.html"><span>Dropdown</span></a>
                        <ul className="collapse" id="collapseItem0">
                            <li><a href="#">Menu One</a></li>
                            <li><a href="#">Menu Two</a></li>
                            <li><a href="#">Menu Three</a></li>
                            <li className="has-children"><span className="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem1"></span>
                                <a href="#">Dropdown</a>
                                <ul className="collapse" id="collapseItem1">
                                    <li><a href="#">Menu One</a></li>
                                    <li><a href="#">Menu Two</a></li>
                                    <li><a href="#">Menu Three</a></li>
                                    <li><a href="#">Menu Four</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                    <li><Link href="/login"><a><span>Get Started</span></a></Link></li>
                    <li><Link href="/about"><a ><span>About</span></a></Link></li>
                    <li><Link href="/contact"><a ><span>Contact</span></a></Link></li>
                </ul></div>
            </div>
            <header className="site-navbar " sticky="top" role="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-11 col-xl-2">
                            <h1 className="mb-0 site-logo"><a href="index.html" className="text-white h2 mb-0">Browse</a></h1>
                        </div>
                        <div className="col-12 col-md-10 d-none d-xl-block">
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li className="active"><Link href="/"><a><span>Home</span></a></Link></li>
                                    {/* <li className="has-children">
                                        <a href="#"><span>Dropdown</span></a>
                                        <ul className="dropdown arrow-top">
                                            <li><a href="#">Menu One</a></li>
                                            <li><a href="#">Menu Two</a></li>
                                            <li><a href="#">Menu Three</a></li>
                                            <li className="has-children">
                                                <a href="#">Dropdown</a>
                                                <ul className="dropdown">
                                                    <li><a href="#">Menu One</a></li>
                                                    <li><a href="#">Menu Two</a></li>
                                                    <li><a href="#">Menu Three</a></li>
                                                    <li><a href="#">Menu Four</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li><Link href="/login"><a ><span>Get Started</span></a></Link></li>
                                    <li><Link href="/about"><a ><span>About</span></a></Link></li>
                                    <li><Link href="/contact"><a><span>Contact</span></a></Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: "relative", top: "3px" }}><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>
                    </div>
                </div>
            </header>
        </div>)
}