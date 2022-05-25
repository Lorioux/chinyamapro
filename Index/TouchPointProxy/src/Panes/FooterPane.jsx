import * as React from "react";
import { BreadCrumbInfo } from "./ContactPane";

export function FooterPane() {
    const {contacts, links} = BreadCrumbInfo()
    
    return <footer className="construct">
        <div className="container">
            <div className="row">
                {/* .widget */}
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 widget">
                    <img className="positioned wow slideInUp" src="/img/resources/footer-crane.png" alt="" />
                </div> {/* /.widget */}
                {/* .widget */}
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 widget">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consect- <br />etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali qua. Ut enim ad minim veniam, quis no strud exercitation ullamco. Ut enim ad minim.</p>
                    <a href="#" className="read-more">Read More <i className="fa fa-angle-double-right" /></a>
                    <ul className="social">
                        {links}
                    </ul>
                </div> {/* /.widget */}
                {/* .widget */}
                {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 widget clearboth-tab clearboth-480">
                    <h3>popular Posts</h3>
                    <ul className="our-services">
                        <li><a href="#">Building Construction</a></li>
                        <li><a href="#">Hardwood Flooring</a></li>
                        <li><a href="#">Home Renovation</a></li>
                        <li><a href="#">Repairing of Roof</a></li>
                        <li><a href="#">Commercial Construction</a></li>
                    </ul>
                </div>  */}
                {/* /.widget */}
                {/* .widget */}
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 widget">
                    <h3>Get in Touch</h3>
                    <ul className="contact-info">
                        <li><i className="fa fa-map-marker" /><span className="text"><a style={{color: "GrayText" }} href={`tel:${contacts.telfix}`}>{contacts.place}</a></span></li>
                        <li><i className="fa fa-phone" /> <span className="text"><a style={{color: "GrayText" }} href={`tel:${contacts.mobile}`}>{contacts.mobile}</a></span></li>
                        <li><i className="fa fa-envelope-o" /> <span className="text"><a style={{color: "GrayText" }} href={`mailto:${contacts.email}`}>{contacts.email}</a></span></li>
                        <li><i className="fa fa-globe" /> <span className="text"><a style={{color: "GrayText" }} href="https://chinyama.co.mz">https://chinyama.co.mz</a></span></li>
                    </ul>
                </div> {/* /.widget */}
            </div>
        </div>
    </footer>;
}
