import * as React from "react" 


import PageBanner from "../components/Banner"
import SearchBox from "../components/Search"
import PagesMenu from "../components/Menu"
import BreadCrumbInfo from "../components/ContactInfo"
import WelComePlane from "../components/WelCome"
import TeamPlane from "../components/Team"





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
            {Services()} 
            {/* /#service-we-provide */}

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
                        <img src="img/project-v4/1.jpg" alt="" />
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
                        <img src="img/project-v4/2.jpg" alt="" />
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
                        <img src="img/project-v4/3.jpg" alt="" />
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
                        <img src="img/project-v4/4.jpg" alt="" />
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
                        <img src="img/project-v4/5.jpg" alt="" />
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
                        <img src="img/project-v4/6.jpg" alt="" />
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
                        <img src="img/project-v4/7.jpg" alt="" />
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
                        <img src="img/project-v4/8.jpg" alt="" />
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
                        <img src="img/project-v4/9.jpg" alt="" />
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
                        <img src="img/project-v4/10.jpg" alt="" />
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


export function Services() {
    const services = React.useRef()
    const servicePackages = React.useRef([])
    const defaultData = React.useRef()

    const [listOfservices, setService] = React.useState({})

    const packages = React.useCallback(()=> (<ul>
        <li><i className="fa fa-arrow-circle-o-right" />Natus erroroluptatem</li>
        <li><i className="fa fa-arrow-circle-o-right" />Accusantium doloremue</li>
        <li><i className="fa fa-arrow-circle-o-right" />Laudantium unde </li>
        <li><i className="fa fa-arrow-circle-o-right" />Natus error sit volupta</li>
        <li><i className="fa fa-arrow-circle-o-right" />Accusantium dolor</li>
    </ul>), [])

    
    const ServicePackage = React.useCallback((id, title, _summary, _items, _images ) => {
        const images = _images || ["img/service-we-provide/1.jpg", "img/service-we-provide/2.png"]
        const items = _items || packages()
        const summary = _summary || defaultData.current.summary + " " + title
        // console.log(_summary)
        return (
            <div id={id} key={id}>
                <div className="col-lg-8 col-md-7 col-sm-8">
                    <p>{summary}</p>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <img src={images[0]} alt="" />
                            {/* "img/service-we-provide/1.jpg" */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            {items}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 zoomIn">
                    <img src={images[1]} alt="" /> 
                    {/* "img/service-we-provide/2.png" */}
                </div>
            </div>
        )
    }, [packages])


    React.useEffect(()=>{
        const services = fetch("/Service/Packages", {
            method: "GET"
        })

        services.then(res => res.json())
        .then(data=> {
            defaultData.current = data.default;
            
            setService(data.services)
        })
        .catch(err => console.log(err))
        
    }, [])


    React.useEffect(()=>{
        const _services = []
        let index = 0
        let listelem  = <></>
        let svcPackages = []

        for(const svc in listOfservices){
                if (index === 0 ) {
                   listelem = <li className="active" data-tab-name={svc} key={svc}>{listOfservices[svc].title}</li>
                }
                else {
                    listelem = <li data-tab-name={svc} key={svc}>{listOfservices[svc].title}</li>
                }
                _services.push(listelem)
                index += 1

                const svc_title = listOfservices[svc].title
                const svc_images = listOfservices[svc].images
                const svc_summary = listOfservices[svc].summary
                const svc_items = listOfservices[svc].packages
                const svc_package = ServicePackage(svc, svc_title, svc_summary, svc_items, svc_images)
                svcPackages.push(svc_package)

            }
        
        services.current = _services
        servicePackages.current = svcPackages
        }, [listOfservices, ServicePackage])

    
    return <section id="service-we-provide" className="construct">
        <div className="container">
            <div className="section-title">
                <h1>Services that we offers</h1>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 wow slideInLeft">
                    <div className="service-tab-title">
                        <ul className="clearfix">
                            { services.current }
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9 col-md-9 wow slideInRight">
                    <div className="row">                        
                        <div className="service-tab-content clearfix" >
                            { servicePackages.current[0] }
                        </div>
                        <div className="service-tab-content clearfix" >
                            { servicePackages.current[1] }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

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
