
export default function PagesMenu() {
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