import * as React from "react" 


import PageBanner from "../components/Banner"
import SearchBox from "../components/Search"
import PagesMenu from "../components/Menu"
import BreadCrumbInfo from "../components/ContactInfo"
import WelComePlane from "../components/WelCome"
import TeamPlane from "../components/Team"
import Services from "../components/Services"
import ServicesPortfolio from "../components/ServicesPortfolio"


function IndexHeader() {
    return (
        <header className="construct header-curvy">
            { <SearchBox />}
            {CartInfo()} 
            {<PagesMenu />}
        </header>
    )
}


function CartInfo(props) {

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
                <p><i className="icon icon-FullShoppingCart" /> You Have <span>{cart.items} {cart.items > 1? 'Items' : 'Item'}</span> in your Cart. Total: <span>{cart.price}</span></p>
            </div>
        </div>
    </div>
}



export default function OnePage(props){
    const {editable} = props
    return (
        <div>
            {/* #topbar */}
            {BreadCrumbInfo()} {/* /#topbar */}
            
            {/* header */}
            {<IndexHeader editable={editable} />} 
            {/* /header */}
            
            {<PageBanner editable={editable}/>}

            {<WelComePlane editable={editable} />}

            {/* #service-we-provide */}
            {<Services editable={editable} />} 
            {/* /#service-we-provide */}

            {<ServicesPortfolio editable={editable} />}

            <section id="video-section-construction">
                <div className="container">
                <div className="clearfix">
                    <div className="video-preview">
                    <a href="http://www.youtube.com/watch?v=hMHAcYsvxHE" className="video-fancybox">
                        <img src="img/video-construction/1.jpg" alt="" />
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
                        <img src="img/welcome-to-construct/1.jpg" alt="" />
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
                            <img src="img/testimonials-construct/1.jpg" alt="" />
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
                            <img src="img/testimonials-construct/2.jpg" alt="" />
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
                            <img src="img/testimonials-construct/1.jpg" alt="" />
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
                            <img src="img/testimonials-construct/2.jpg" alt="" />
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
                            <img src="img/testimonials-construct/1.jpg" alt="" />
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
                            <img src="img/testimonials-construct/2.jpg" alt="" />
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
                            <img src="img/testimonials-construct/1.jpg" alt="" />
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
                            <img src="img/testimonials-construct/2.jpg" alt="" />
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

            {TeamPlane()}

            <section id="blog-construct">
                <div className="container">
                <div className="section-title">
                    <h1>Blogs</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 single-blog-post">
                    <div className="img-holder hvr-rectangle-out">
                        <img src="img/blog-construct/1.jpg" alt="" />
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
                        <img src="img/blog-construct/2.jpg" alt="" />
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
                        <img src="img/blog-construct/3.jpg" alt="" />
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
                        <img src="img/clients/1.png" alt="" />
                        </div>
                        <div className="item">
                        <img src="img/clients/2.png" alt="" />
                        </div>
                        <div className="item">
                        <img src="img/clients/3.png" alt="" />
                        </div>
                        <div className="item">
                        <img src="img/clients/4.png" alt="" />
                        </div>
                        <div className="item">
                        <img src="img/clients/5.png" alt="" />
                        </div>
                        <div className="item">
                        <img src="img/clients/3.png" alt="" />
                        </div>
                        <div className="item">
                        <img src="img/clients/4.png" alt="" />
                        </div>
                        <div className="item">
                        <img src="img/clients/5.png" alt="" />
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
                    <img className="positioned wow slideInUp " src="img/resources/footer-crane.png" alt="" />
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

