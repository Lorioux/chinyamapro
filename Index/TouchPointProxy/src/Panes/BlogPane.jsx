import * as React from "react";
import {PROXY_HOSTNAME} from "../Main/Constant";
import {
    Box, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, FormGroup, Input, TextareaAutosize, TextField
} from "@mui/material"
import { CloseOutlined } from "@mui/icons-material";


const BlogCard = (props) => {
    const {date, month, headline, comment} = props
    const {author, commentnum} = props
    const {image} = props
    return (
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 single-blog-post">
            <div className="img-holder hvr-rectangle-out">
                <img src={image} alt="" />
                <div className="date">
                    <b>{date}</b> <br />{month}
                </div>
            </div>
            <a href="#"><h2>{headline}</h2></a>
            <p>{comment}</p>
            <ul>
                <li><span><b>By: </b> {author} </span></li>
                <li><a href="#">{commentnum}</a></li>
            </ul>
        </div>
    );
}

export function Blog(props) {
    
    // const {editable} = props
    const [Blogs, setBlog] = React.useState({})
    const [BlogCards, setBlogCards] = React.useState([])

    // const [showForm, setShowForm] = React.useState(false)

    React.useEffect(() => {
        const url = `${PROXY_HOSTNAME}/blogs`
        const blogs = async () => fetch(url)

        blogs()
            .then(res => res.json())
            .then(data => {
                setBlog(data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])


    React.useEffect(() => {
        const blogcards = []

        for (const k in Blogs) {
            const blog = Blogs[k]
            // const author = blog.author
            // console.log(author)
            blogcards.push(<BlogCard  key={k} {...blog} /> )
        }

        setBlogCards(blogcards)
    },[Blogs])

    return <section id="blog-construct">
        <div className="container">
            <div className="section-title">
                <h1>Blogs</h1>
            </div>
            <div className="row">
                {BlogCards}
            </div>
        </div>
    </section>;
}


const BlogForm = (props) => {

    const {showCallback} = props

    return (
        <Box sx={{ marginTop: 4,  marginBottom: 4 , padding: 2 }}>
            <Card>
                <CardHeader title="Add Testimonial" action={<CardActions>
                    <CloseOutlined color="primary" fontSize="large" onClick={() => showCallback(false)} />
                </CardActions>}></CardHeader>
                <CardContent>
                <form method="POST" action={`${PROXY_HOSTNAME}/blog/add`} >
                    <FormGroup sx={{ rowGap: 1, marginBottom: 4 }}> 
                        <label style={{ fontSize: 12}}>Click to add image (keep the size) <br/>
                            <img src="img/testimonials-construct/1.jpg" alt="size 170x185"/>
                            <Input type="file" name="file" id="file" sx={{ display: "none"}} required/>
                        </label>
                    </FormGroup>
                    <FormGroup sx={{ rowGap: 1, marginBottom: 4 }}>
                        <TextField name={"author"} variant={"outlined"} label="Full name" required/>
                    </FormGroup>
                    <FormGroup sx={{ rowGap: 1, marginBottom: 4 }}>
                        <TextField type={"date"}  name={"date"} variant={"outlined"} InputLabelProps={{
                            shrink: true
                        }} label="Date" required/> 
                    </FormGroup>
                    <FormGroup sx={{ rowGap: 1, marginBottom: 4 }}>
                        <TextareaAutosize name="comment" variant="outlined" label="Description" placeholder="Comment" required/>
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