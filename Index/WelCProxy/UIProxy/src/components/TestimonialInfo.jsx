import { CloseOutlined, Edit } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, FormGroup, Input, TextareaAutosize, TextField } from "@mui/material";
import * as React from "react";

export default function TestimonialInfo(props) {
    const {editable} = props
    
    const [showForm, setShowForm] = React.useState(false)

    const [Testimonials, setTestimonial] = React.useState({})
    const [TestimonialCards, setTestCards] = React.useState([])

    const testimonialinfo = React.useCallback(() => {
        return {
            "john_michale" : {
                "image": "img/testimonials-construct/1.jpg",
                "fullname": "John Michale",
                "message": "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim."
            },
            "john_doe" : {
                "image": "img/testimonials-construct/1.jpg",
                "fullname": "John Doe",
                "message": "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim."
            },
            "john_blake" : {
                "image": "img/testimonials-construct/1.jpg",
                "fullname": "John Blake",
                "message": "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim."
            }
        }
    }, [])

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
        const testimonial = async () => fetch("/testimonial/all")

        testimonial()
            .then( res => res.json())
            .then(data => {
                setTestimonial(data)
            })
            .catch(err => {
                setTestimonial(testimonialinfo())
                console.log(err)
            })
    }, [testimonialinfo])

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

    
    const TestimonialCardInfo = () => {
        return (
            <div className="owl-carousel owl-theme">
                {TestimonialCards}
            </div>   
        )
    }
    return (
        <section id="testimonials-construct-home">
            <div className="container">
                <div className="section-title">
                    <h1>testimonials</h1>
                </div>
                <div className="clearfix">
                    {
                        !showForm ? < TestimonialCardInfo /> : <TestimonialInfoForm showCallback={setShowForm} />
                    }
                    { editable && !showForm ? <CardActions sx={{border: "1px dotted grey", width: "100%", marginTop: 2, backgroundColor: "whitesmoke"}} onClick={() => setShowForm(true)} >
                        <Edit titleAccess="Edit"  fontSize="large" color={"primary"} onClick={() => setShowForm(true)}/>  Edit
                        </CardActions> : undefined
                    }
                </div>
            </div>
        </section>
    );
}



function TestimonialInfoForm (props) {
    const {showCallback} = props
    return (
        <Box sx={{ marginTop: 4,  marginBottom: 4 , padding: 2 }}>
            <Card>
                <CardHeader title="Add Testimonial" action={<CardActions>
                    <CloseOutlined color="primary" fontSize="large" onClick={() => showCallback(false)} />
                </CardActions>}></CardHeader>
                <CardContent>
                <form method="POST" action="/Press/Info">
                    <FormGroup sx={{ rowGap: 1, marginBottom: 4 }}>
                        <TextField name="fullname" variant="outlined" label="Full name" required/>
                        <TextareaAutosize name="Message" variant="outlined" label="Description" placeholder="Message" required/>
                    </FormGroup>
                    <FormGroup sx={{ rowGap: 2 }}> 
                        
                        <label style={{ fontSize: 12}}>Click to add image (keep the size) <br/>
                            <img src="img/testimonials-construct/1.jpg" alt="size 170x185"/>
                            <Input type="file" name="file" id="file" sx={{ display: "none"}} required/>
                        </label>
                    </FormGroup>
                    <ButtonGroup>
                        <Button type="submit">SAVE</Button>
                    </ButtonGroup>
                </form>
                </CardContent>
            </Card>
        </Box>
    )
}