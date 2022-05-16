import * as React from "react";

export default function TestimonialInfo(props) {

    const [Testimonials, setTestimonial] = React.useState({})
    const [TestimonialCards, setTestCards] = React.useState([])

    const testimonialinfo = {
        "john_michale" : {
            "image": "img/testimonials-construct/1.jpg",
            "fullname": "John Michale",
            "message": "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim."
        }
    }

    const TestimonialCard = (id, name, image, message) => {
        return (
            <div key={id} className="item">
                <div className="single-testimonial-construct clearfix">
                    <div className="img-holder hvr-rectangle-out">
                        <img src={image} alt="" />
                    </div>
                    <div className="content">
                        <h3>{name}</h3>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        );
    }

    React.useEffect(() => {
        const testimonial = async () => fetch("/testemonial/info")

        testimonial()
            .then( res => res.json())
            .then(data => {
                setTestimonial(data)
            })
            .catch(err => {
                // setTestimonial(testimonialinfo)
            })
    })

    React.useEffect(() => {
        const cards = []
        for( const name in Testimonials){
            let testimonial = Testimonials[name]
            let fullname = testimonial.fullname 
            let image = testimonial.image 
            let message = testimonial.message
            cards.push(TestimonialCard(name,fullname, image, message ) )
        }

        setTestCards(cards)

    }, [Testimonials])

    
    return <section id="testimonials-construct-home">
        <div className="container">
            <div className="section-title">
                <h1>testimonials</h1>
            </div>
            <div className="clearfix">
                <div className="owl-carousel owl-theme">
                    {TestimonialCards}
                </div>
            </div>
        </div>
    </section>;
}
