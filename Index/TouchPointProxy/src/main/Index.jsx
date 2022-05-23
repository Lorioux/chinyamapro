import * as React from "react" 


import PageBanner from "../components/Banner"
import SearchBox from "../components/Search"
import PagesMenu from "../components/Menu"
import BreadCrumbInfo from "../components/ContactInfo"
import Disclaim, {CompanyBanner} from "../components/Disclaim"
import TeamPlane from "../components/Team"
import Services from "../components/Services"
// import ServicesPortfolio from "../components/ServicesPortfolio"
import { PressVideo } from "../components/PressVideo"
import { PressInfo } from "../components/PressInfo"
import TestimonialInfo from "../components/TestimonialInfo"
import { Blog } from "../components/Blog"
import { Client } from "../components/Client"
import { PROXY_HOSTNAME } from "./proxy"


function IndexHeader() {
    return (
        <header className="construct header-curvy">
            { <SearchBox />}
            {<CartInfo />} 
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
        const url = `${PROXY_HOSTNAME}/cart/items`
        const Items = async () => fetch(url)
        Items()
            .then(response => response.json())
            .then( data => setCart({
                items: data.items,
                price: data.price
            }))
            .catch(reason => {
                console.log("No items")
            })    
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
            {<BreadCrumbInfo editable={editable} />} {/* /#topbar */}
            
            {/* header */}
            {<IndexHeader editable={editable} />} 
            {/* /header */}
            
            {<PageBanner editable={editable}/>}

            {<Disclaim editable={editable} />}

            {/* #service-we-provide */}
            {<Services editable={editable} />} 
            {/* /#service-we-provide */}

            {/* {<ServicesPortfolio editable={editable} />} */}

            {<PressVideo editable={editable} />}

            {<PressInfo  editable={editable} />}

            {<TestimonialInfo editable={editable} />}

            {<TeamPlane  editable={editable} />}

            {<Blog editable={editable} />}

            {/* #clients */}
            {<Client editable={editable} />} {/* /#clients */}

            {<CompanyBanner editable={editable} />}

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





