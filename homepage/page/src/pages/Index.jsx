import * as React from "react" 


import PageBanner from "../components/Banner"





export default function OnePage(){

    return (
        <div>
            {/* #topbar */}
            <section id="topbar" className="construct">
                <div className="container">
                <div className="row">
                    <div className="social pull-right">
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook-square" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                        <li><a href="#"><i className="fa fa-skype" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                    </ul>
                    </div> {/* /.social */}
                    <div className="contact-info pull-left">
                    <ul>
                        <li><a href="tel:+1234567890"><i className="fa fa-map-marker" />  56, Building- Avenue-96, New York </a></li>
                        <li><a href="mailto:info@plumberx.com"><i className="fa fa-envelope" /> info@constructpress.com</a></li>
                        <li><a href="tel:1800654896"><i className="fa fa-phone" /> + (1800) - 654 - 896</a></li>
                    </ul>
                    </div> {/* /.contact-info */}
                </div>
                </div>
            </section> {/* /#topbar */}
            
            {/* header */}
            {IndexHeader()} {/* /header */}

            {PageBanner()}

            <section id="construction-welcome">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 single-construction-welcome">
                    <div className="img-holder hvr-rectangle-out">
                        <img src="img/construction-welcome/1.jpg" alt />
                    </div>
                    <h2>Construction</h2>
                    <p>Lorem ipsum dolor sit amet, cons ectetur elit. Ves tibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 single-construction-welcome">
                    <div className="img-holder hvr-rectangle-out">
                        <img src="img/construction-welcome/2.jpg" alt />
                    </div>
                    <h2>renovation</h2>
                    <p>Lorem ipsum dolor sit amet, cons ectetur elit. Ves tibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0 single-construction-welcome">
                    <h1>Wecome to ConstructPress</h1>
                    <p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestib ulum nec odios Suspe ndisse cursus mal suada fact lisis. Lorem ipsum dolor sit.</p>
                    <ul>
                        <li><i className="fa fa-arrow-circle-o-right" /> Interior design Package</li>
                        <li><i className="fa fa-arrow-circle-o-right" /> Reparing of Residentail Roof</li>
                        <li><i className="fa fa-arrow-circle-o-right" /> Hardwood Flooring</li>
                        <li><i className="fa fa-arrow-circle-o-right" /> Renovaion of Commercial Office</li>
                        <li><i className="fa fa-arrow-circle-o-right" /> Make Quality Products</li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>

            {/* #service-we-provide */}
            <section id="service-we-provide" className="construct">
                <div className="container">
                <div className="section-title">
                    <h1>Services that we offers</h1>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 wow slideInLeft">
                    <div className="service-tab-title">
                        <ul className="clearfix">
                        <li className="active" data-tab-name="construction">Building Construction</li>
                        <li data-tab-name="renovation">Building Renovation</li>
                        <li data-tab-name="interior">Interior Design package</li>
                        <li data-tab-name="isolatoin">Isolation</li>
                        <li data-tab-name="roof">Roof Repairing</li>
                        <li data-tab-name="consluting">architecture conslulting</li>
                        <li data-tab-name="maintanance">building maintanance</li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-9 col-md-9 wow slideInRight">
                    <div className="row">
                        <div className="service-tab-content clearfix">
                        <div id="construction">
                            <div className="col-lg-8 col-md-7 col-sm-8">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br /> dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent <br /> ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo <br /> inventore veritatis et quasi architecto.</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src="img/service-we-provide/1.jpg" alt />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <ul>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus erroroluptatem</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium doloremue</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Laudantium unde </li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus error sit volupta</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium dolor</li>										
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 zoomIn">
                            <img src="img/service-we-provide/2.png" alt />
                            </div>
                        </div>
                        <div id="renovation">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src="img/service-we-provide/1.jpg" alt />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <ul>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus erroroluptatem</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium doloremue</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Laudantium unde </li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus error sit volupta</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium dolor</li>										
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 zoomIn">
                            <img src="img/service-we-provide/2.png" alt />
                            </div>
                        </div>
                        <div id="interior">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src="img/service-we-provide/1.jpg" alt />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <ul>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus erroroluptatem</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium doloremue</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Laudantium unde </li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus error sit volupta</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium dolor</li>										
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 zoomIn">
                            <img src="img/service-we-provide/2.png" alt />
                            </div>
                        </div>
                        <div id="isolatoin">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src="img/service-we-provide/1.jpg" alt />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <ul>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus erroroluptatem</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium doloremue</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Laudantium unde </li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus error sit volupta</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium dolor</li>										
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 zoomIn">
                            <img src="img/service-we-provide/2.png" alt />
                            </div>
                        </div>
                        <div id="roof">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src="img/service-we-provide/1.jpg" alt />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <ul>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus erroroluptatem</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium doloremue</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Laudantium unde </li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus error sit volupta</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium dolor</li>										
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 zoomIn">
                            <img src="img/service-we-provide/2.png" alt />
                            </div>
                        </div>
                        <div id="consluting">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src="img/service-we-provide/1.jpg" alt />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <ul>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus erroroluptatem</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium doloremue</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Laudantium unde </li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus error sit volupta</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium dolor</li>										
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 zoomIn">
                            <img src="img/service-we-provide/2.png" alt />
                            </div>
                        </div>
                        <div id="maintanance">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src="img/service-we-provide/1.jpg" alt />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <ul>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus erroroluptatem</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium doloremue</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Laudantium unde </li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Natus error sit volupta</li>
                                    <li><i className="fa fa-arrow-circle-o-right" />Accusantium dolor</li>										
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 zoomIn">
                            <img src="img/service-we-provide/2.png" alt />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section> {/* /#service-we-provide */}

            <section id="project-version-one" className="construct home">
                <div className="container">
                <div className="section-title">
                    <h1>our latest projects</h1>
                </div>
                </div>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <ul className="gallery-filter">
                        <li data-filter="all">
                        <span>All</span>
                        </li>
                        <li data-filter=".kitchen">
                        <span>Indoor Furniture</span>
                        </li>
                        <li data-filter=".bathroom">
                        <span>Renovaion of house</span>
                        </li>
                        <li data-filter=".drain">
                        <span>hardwood flooring</span>
                        </li>
                        <li data-filter=".plumbing">
                        <span>wood supply</span>
                        </li>
                        <li data-filter=".outside">
                        <span>furniture manufacturing</span>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="row normal-gallery gallery-v4" id="image-gallery-mix">
                    <div className="single-project-item mix  tank outside">
                    <div className="img-wrap">
                        <img src="img/project-v4/1.jpg" alt />
                        <div className="content-wrapper hvr-sweep-to-right">
                        <div className="content">
                            <div className="button-box">
                            <a className="fancybox" data-fancybox-group="home-gallery" title="Building Construction" href="img/project-v4/1.jpg"><i className="fa fa-search-plus" /></a>
                            </div>
                            <div className="text-box">
                            <h4>Building Construction</h4>
                            <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-project-item mix plumbing outside">
                    <div className="img-wrap">
                        <img src="img/project-v4/2.jpg" alt />
                        <div className="content-wrapper hvr-sweep-to-right">
                        <div className="content">
                            <div className="button-box">
                            <a className="fancybox" data-fancybox-group="home-gallery" title="Building Renovation" href="img/project-v4/2.jpg"><i className="fa fa-search-plus" /></a>
                            </div>
                            <div className="text-box">
                            <h4>Building Renovation</h4>
                            <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-project-item mix drain plumbing bathroom">
                    <div className="img-wrap">
                        <img src="img/project-v4/3.jpg" alt />
                        <div className="content-wrapper hvr-sweep-to-right">
                        <div className="content">
                            <div className="button-box">
                            <a className="fancybox" data-fancybox-group="home-gallery" title="Interior Design package" href="img/project-v4/3.jpg"><i className="fa fa-search-plus" /></a>
                            </div>
                            <div className="text-box">
                            <h4>Interior Design package</h4>
                            <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-project-item mix kitchen outside drain bathroom">
                    <div className="img-wrap">
                        <img src="img/project-v4/4.jpg" alt />
                        <div className="content-wrapper hvr-sweep-to-right">
                        <div className="content">
                            <div className="button-box">
                            <a className="fancybox" data-fancybox-group="home-gallery" title="Isolation" href="img/project-v4/4.jpg"><i className="fa fa-search-plus" /></a>
                            </div>
                            <div className="text-box">
                            <h4>Isolation</h4>
                            <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-project-item mix kitchen  bathroom">
                    <div className="img-wrap">
                        <img src="img/project-v4/5.jpg" alt />
                        <div className="content-wrapper hvr-sweep-to-right">
                        <div className="content">
                            <div className="button-box">
                            <a className="fancybox" data-fancybox-group="home-gallery" title="Roof Repairing" href="img/project-v4/5.jpg"><i className="fa fa-search-plus" /></a>
                            </div>
                            <div className="text-box">
                            <h4>Roof Repairing</h4>
                            <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-project-item mix kitchen drain ">
                    <div className="img-wrap">
                        <img src="img/project-v4/6.jpg" alt />
                        <div className="content-wrapper hvr-sweep-to-right">
                        <div className="content">
                            <div className="button-box">
                            <a className="fancybox" data-fancybox-group="home-gallery" title="Architecture Conslulting" href="img/project-v4/6.jpg"><i className="fa fa-search-plus" /></a>
                            </div>
                            <div className="text-box">
                            <h4>Architecture Conslulting</h4>
                            <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-project-item mix kitchen drain bathroom">
                    <div className="img-wrap">
                        <img src="img/project-v4/7.jpg" alt />
                        <div className="content-wrapper hvr-sweep-to-right">
                        <div className="content">
                            <div className="button-box">
                            <a className="fancybox" data-fancybox-group="home-gallery" title="Building Maintanance" href="img/project-v4/7.jpg"><i className="fa fa-search-plus" /></a>
                            </div>
                            <div className="text-box">
                            <h4>Building Maintanance</h4>
                            <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-project-item mix kitchen drain bathroom">
                    <div className="img-wrap">
                        <img src="img/project-v4/8.jpg" alt />
                        <div className="content-wrapper hvr-sweep-to-right">
                        <div className="content">
                            <div className="button-box">
                            <a className="fancybox" data-fancybox-group="home-gallery" title="Building Construction" href="img/project-v4/8.jpg"><i className="fa fa-search-plus" /></a>
                            </div>
                            <div className="text-box">
                            <h4>Building Construction</h4>
                            <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-project-item mix kitchen drain bathroom">
                    <div className="img-wrap">
                        <img src="img/project-v4/9.jpg" alt />
                        <div className="content-wrapper hvr-sweep-to-right">
                        <div className="content">
                            <div className="button-box">
                            <a className="fancybox" data-fancybox-group="home-gallery" title="Building Renovation" href="img/project-v4/9.jpg"><i className="fa fa-search-plus" /></a>
                            </div>
                            <div className="text-box">
                            <h4>Building Renovation</h4>
                            <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-project-item mix kitchen drain bathroom">
                    <div className="img-wrap">
                        <img src="img/project-v4/10.jpg" alt />
                        <div className="content-wrapper hvr-sweep-to-right">
                        <div className="content">
                            <div className="button-box">
                            <a className="fancybox" data-fancybox-group="home-gallery" title="Interior Design package" href="img/project-v4/10.jpg"><i className="fa fa-search-plus" /></a>
                            </div>
                            <div className="text-box">
                            <h4>Interior Design package</h4>
                            <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="view-all-btn text-center"><a href="project-v1.html" className="view-all hvr-bounce-to-right">view all</a></div>
                </div>
            </section>

            <section id="video-section-construction">
                <div className="container">
                <div className="clearfix">
                    <div className="video-preview">
                    <a href="http://www.youtube.com/watch?v=hMHAcYsvxHE" className="video-fancybox">
                        <img src="img/video-construction/1.jpg" alt />
                    </a>
                    </div>
                    <div className="video-text">
                    <h2>Checkout our video for featured work</h2>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uuntur magnirt dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quis quam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quis quam qui dolorem ipsu quiat dolor sit amet, consectetur, adipisci velit.</p>
                    <a href="contact.html" className="contact-us hvr-bounce-to-right">Contact Us</a>
                    </div>
                </div>
                </div>
            </section>

            <section id="welcome-to-construct">
                <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <div className="img-holder hvr-rectangle-out pull-right">
                        <img src="img/welcome-to-construct/1.jpg" alt />
                    </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <h2>Welcome to construct press</h2>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliq uam quae rat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
                    <h3>We are available for 24/7 for you requirements</h3>
                    <div className="list-box clearfix">
                        <ul>
                        <li><i className="fa fa-hand-o-right" /> COMPLETE SAFETY ANALYSIS</li>
                        <li><i className="fa fa-hand-o-right" /> DRIVABILITY PROBLEMS</li>
                        </ul>
                        <ul>
                        <li><i className="fa fa-hand-o-right" /> COMPLETE SAFETY ANALYSIS</li>
                        <li><i className="fa fa-hand-o-right" /> DRIVABILITY PROBLEMS</li>
                        </ul>
                    </div>
                    </div>				
                </div>
                </div>
            </section>

            <section id="testimonials-construct-home">
                <div className="container">
                <div className="section-title">
                    <h1>testimonials</h1>
                </div>
                <div className="clearfix">
                    <div className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="single-testimonial-construct clearfix">
                        <div className="img-holder hvr-rectangle-out">
                            <img src="img/testimonials-construct/1.jpg" alt />
                        </div>
                        <div className="content">
                            <h3>John Michale</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.</p>
                        </div>
                        </div>	
                    </div>
                    <div className="item">
                        <div className="single-testimonial-construct clearfix">
                        <div className="img-holder hvr-rectangle-out">
                            <img src="img/testimonials-construct/2.jpg" alt />
                        </div>
                        <div className="content">
                            <h3>John Michale</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.</p>
                        </div>
                        </div>	
                    </div>
                    <div className="item">
                        <div className="single-testimonial-construct clearfix">
                        <div className="img-holder hvr-rectangle-out">
                            <img src="img/testimonials-construct/1.jpg" alt />
                        </div>
                        <div className="content">
                            <h3>John Michale</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.</p>
                        </div>
                        </div>	
                    </div>
                    <div className="item">
                        <div className="single-testimonial-construct clearfix">
                        <div className="img-holder hvr-rectangle-out">
                            <img src="img/testimonials-construct/2.jpg" alt />
                        </div>
                        <div className="content">
                            <h3>John Michale</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.</p>
                        </div>
                        </div>	
                    </div>
                    <div className="item">
                        <div className="single-testimonial-construct clearfix">
                        <div className="img-holder hvr-rectangle-out">
                            <img src="img/testimonials-construct/1.jpg" alt />
                        </div>
                        <div className="content">
                            <h3>John Michale</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.</p>
                        </div>
                        </div>	
                    </div>
                    <div className="item">
                        <div className="single-testimonial-construct clearfix">
                        <div className="img-holder hvr-rectangle-out">
                            <img src="img/testimonials-construct/2.jpg" alt />
                        </div>
                        <div className="content">
                            <h3>John Michale</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.</p>
                        </div>
                        </div>	
                    </div>
                    <div className="item">
                        <div className="single-testimonial-construct clearfix">
                        <div className="img-holder hvr-rectangle-out">
                            <img src="img/testimonials-construct/1.jpg" alt />
                        </div>
                        <div className="content">
                            <h3>John Michale</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.</p>
                        </div>
                        </div>	
                    </div>
                    <div className="item">
                        <div className="single-testimonial-construct clearfix">
                        <div className="img-holder hvr-rectangle-out">
                            <img src="img/testimonials-construct/2.jpg" alt />
                        </div>
                        <div className="content">
                            <h3>John Michale</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.</p>
                        </div>
                        </div>	
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section id="our-team-construct">
                <div className="container">
                <div className="section-title">
                    <h1>Our dedicated team</h1>
                </div>
                <div className="owl-carousel owl-theme">
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/1.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/2.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/3.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/4.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/1.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/2.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/3.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/4.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/1.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/2.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/3.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/4.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="single-construct-member">
                        <div className="img-holder">
                        <img src="img/our-team-construct/1.png" alt />
                        </div>
                        <div className="content hvr-bounce-to-bottom">
                        <h2>Hendrick jack</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section id="blog-construct">
                <div className="container">
                <div className="section-title">
                    <h1>Blogs</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 single-blog-post">
                    <div className="img-holder hvr-rectangle-out">
                        <img src="img/blog-construct/1.jpg" alt />
                        <div className="date">
                        <b>05</b> <br /> Aug
                        </div>
                    </div>
                    <a href="#"><h2>Heading of Blog</h2></a>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolorem que laudantium totam rem aperiam</p>
                    <ul>
                        <li><span><b>By: </b> Anjori Meyami</span></li>
                        <li><a href="#">Comments 6</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 single-blog-post">
                    <div className="img-holder hvr-rectangle-out">
                        <img src="img/blog-construct/2.jpg" alt />
                        <div className="date">
                        <b>05</b> <br /> Aug
                        </div>
                    </div>
                    <a href="#"><h2>Heading of Blog</h2></a>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolorem que laudantium totam rem aperiam</p>
                    <ul>
                        <li><span><b>By: </b> Anjori Meyami</span></li>
                        <li><a href="#">Comments 6</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 single-blog-post">
                    <div className="img-holder hvr-rectangle-out">
                        <img src="img/blog-construct/3.jpg" alt />
                        <div className="date">
                        <b>05</b> <br /> Aug
                        </div>
                    </div>
                    <a href="#"><h2>Heading of Blog</h2></a>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolorem que laudantium totam rem aperiam</p>
                    <ul>
                        <li><span><b>By: </b> Anjori Meyami</span></li>
                        <li><a href="#">Comments 6</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>

            {/* #clients */}
            <section id="clients" className="construct">
                <div className="container">
                <div className="section-title">
                    <h1>we worked wityh awesome clients</h1>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                        <img src="img/clients/1.png" alt />
                        </div>
                        <div className="item">
                        <img src="img/clients/2.png" alt />
                        </div>
                        <div className="item">
                        <img src="img/clients/3.png" alt />
                        </div>
                        <div className="item">
                        <img src="img/clients/4.png" alt />
                        </div>
                        <div className="item">
                        <img src="img/clients/5.png" alt />
                        </div>
                        <div className="item">
                        <img src="img/clients/3.png" alt />
                        </div>
                        <div className="item">
                        <img src="img/clients/4.png" alt />
                        </div>
                        <div className="item">
                        <img src="img/clients/5.png" alt />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section> {/* /#clients */}

            <section id="great-construct-team">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <h2>Great Construction Company</h2>
                    <p>If you have any construction and renovation work  need, simply <br />call our 24 hour emergecny number.</p>
                    <p className="has-btn"><b>01865 524 8503</b> or <a href="#" className="hvr-bounce-to-right">Contact Us</a></p>
                    </div>
                </div>
                </div>
            </section>

            {/* footer */}
            <footer className="construct">
                <div className="container">
                <div className="row">
                    {/* .widget */}
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 widget">
                    <img className="positioned wow slideInUp " src="img/resources/footer-crane.png" alt />
                    </div> {/* /.widget */}
                    {/* .widget */}
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 widget">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consect- <br />etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali qua. Ut enim ad minim veniam, quis no strud exercitation ullamco. Ut enim ad minim.</p>
                    <a href="#" className="read-more">Read More <i className="fa fa-angle-double-right" /></a>
                    <ul className="social">
                        <li><a href="#" className="hvr-radial-out"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#" className="hvr-radial-out"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#" className="hvr-radial-out"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#" className="hvr-radial-out"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                    </div> {/* /.widget */}
                    {/* .widget */}
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 widget clearboth-tab clearboth-480">
                    <h3>popular Posts</h3>
                    <ul className="our-services">
                        <li><a href="#">Building Construction</a></li>
                        <li><a href="#">Hardwood Flooring</a></li>
                        <li><a href="#">Home Renovation</a></li>
                        <li><a href="#">Repairing of Roof</a></li>
                        <li><a href="#">Commercial Construction</a></li>
                    </ul>
                    </div> {/* /.widget */}
                    {/* .widget */}
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 widget">
                    <h3>Get in Touch</h3>
                    <ul className="contact-info">
                        <li><i className="fa fa-map-marker" /> <span className="text">Lorance Road 542B, Tailstoi Town <br />5248 MT, Wordwide Country</span></li>
                        <li><i className="fa fa-phone" /> <span className="text">01865 524 8503</span></li>
                        <li><i className="fa fa-envelope-o" /> <span className="text">contact@plumberx.com</span></li>
                        <li><i className="fa fa-globe" /> <span className="text">http://plumberx.com</span></li>
                    </ul>
                    </div> {/* /.widget */}
                </div>
                </div>
            </footer> {/* /footer */}

            {/* #bottom-bar */}
            <section id="bottom-bar" className="construct">
                <div className="container">
                <div className="row">
                    {/* .copyright */}
                    <div className="copyright pull-left">
                    <p>Copyright © Plumberx 2015. All rights reserved. </p>
                    </div> {/* /.copyright */}
                    {/* .credit */}
                    <div className="credit pull-right">
                    <p>Created by: DesignArc</p>
                    </div> {/* /.credit */}
                </div>
                </div> 
            </section>{/* /#bottom-bar */}
        </div>    
    )
}

function IndexHeader() {
    return (
        <header className="construct header-curvy">
            {SearhBox()}
            {CardInfo()} 
            {PageManu()}
        </header>
    )
}

function PageManu() {
    return <div className="container">
        <div className="clearfix">
            <div className="pull-left logo">
                <a href="index.html">
                    <img src="img/resources/logo-2.png" alt="Plumberx" />
                </a>
            </div>
            <nav className="pull-right mainmenu-container clearfix">
                <ul className="top-icons-wrap pull-right">
                    <li className="top-icons search"><a href="#"><i className="icon icon-Search" /></a></li>
                    <li className="top-icons cart"><a href="#"><i className="icon icon-ShoppingCart" /></a></li>
                </ul>
                <button className="mainmenu-toggler">
                    <i className="fa fa-bars" />
                </button>
                <ul className="mainmenu pull-right">
                    {HomeMenuItem()}
                    {PagesMenuItem()}
                    {ServiceMenuItem()}
                    {ProjectMenuItem()}
                    {ShopMenuItem()}
                    {BlogMenuItem()}
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </div>

    function HomeMenuItem() {
        return <li className="dropdown current">
            <a href="index.html">Home</a>
            {/* <ul className="submenu">
            <li><a href="index-2.html">One Page Version</a></li>
        </ul> */}
        </li>
    }

    function PagesMenuItem() {
        return <li className="dropdown">
            <a href="#">Pages</a>
            <ul className="submenu">
                <li className="dropdown">
                    <a href="about.html">About Us</a>
                    <ul className="submenu">
                        <li><a href="team.html">Our Team</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </li>
                <li className="dropdown"><a href="testimonials-v1.html">Testimonial</a>
                    <ul className="submenu right-align">
                        <li><a href="testimonials-v1.html">Testimonial V1</a></li>
                        <li><a href="testimonials-v2.html">Testimonial V2</a></li>
                    </ul>
                </li>
                <li><a href="search-result.html">Search Results</a></li>
                <li><a href="no-search-results.html">No serarch result</a></li>
                <li><a href="404.html">404 Page</a></li>
            </ul>
        </li>
    }

    function ServiceMenuItem() {
        return <li className="dropdown"><a href="services.html">Services</a>
            <ul className="submenu">
                <li><a href="services-2.html">Services Two</a></li>
                <li><a href="pricing.html">Pricing</a></li>
            </ul>
        </li>
    }

    function ProjectMenuItem() {
        return <li className="dropdown">
            <a href="project-v1.html">Projects</a>
            <ul className="submenu">
                <li><a href="project-v1.html">Projects V1</a></li>
                <li><a href="project-v2.html">Projects V2</a></li>
                <li><a href="project-v3.html">Projects V3</a></li>
                <li><a href="project-v4.html">Projects V4</a></li>
                <li><a href="project-v5.html">Projects V5</a></li>
            </ul>
        </li>
    }

    function ShopMenuItem() {
        return <li className="dropdown">
            <a href="shop.html">Shop</a>
            <ul className="submenu">
                <li><a href="product-details.html">Product Details</a></li>
                <li><a href="cart-page.html">Cart Page</a></li>
                <li><a href="checkout-page.html">Checkout Page</a></li>
            </ul>
        </li>
    }

    function BlogMenuItem() {
        return (
            <li className="dropdown">
                <a href="blog.html">Blog</a>
                <ul className="submenu">
                    <li><a href="blog-v2.html">Blog Style Two</a></li>
                    <li><a href="blog.html">Blog Left Sidebar</a></li>
                    <li><a href="blog-right.html">Blog Right Sidebar</a></li>
                    <li><a href="blog-single.html">Blog Details</a></li>
                </ul>
            </li>
        )
    }
}

function SearhBox() {
    return (
        <div className="search-box">
            <div className="container">
                <div className="pull-right search  col-lg-3 col-md-4 col-sm-5 col-xs-12">
                    <form action="#">
                        <input type="text" placeholder="Search Here" /> <button type="submit"><i className="icon icon-Search" /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function CardInfo(props) {

    const [cart, setCart] = React.useState({
        items: 1,
        price: "$199"
    })
    React.useEffect( () => {
        const fetchItems = async () => {
            fetch("/cartItems").then(response => response.json())
                .then( data => setCart({
                    items: data.items,
                    price: data.price
                }))
                .catch(reason => {
                    console.log("No items")
                })
        }
        fetchItems()
    }, [])

    return <div className="cart-box">
        <div className="container">
            <div className="pull-right cart col-lg-6 col-xs-12">
                <p><i className="icon icon-FullShoppingCart" /> You Have <span>{cart.items} {cart.items > 0? 'Items' : 'Item'}</span> in your Cart.Price is <span>{cart.price}</span></p>
            </div>
        </div>
    </div>
}
