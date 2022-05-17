import { CloseOutlined, Edit } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, FormGroup, TextareaAutosize, TextField } from "@mui/material";
import * as React from "react";


export function PressVideo(props) {
    const { editable } = props
    const [showFrom, setShowForm] = React.useState(false)
    const MainSection = () => {
        return (
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
                { editable ? <CardActions sx={{border: "1px dotted grey", width: "100%", marginTop: 2, backgroundColor: "whitesmoke"}} onClick={() => setShowForm(true)} >
                    <Edit titleAccess="Edit"  fontSize="large" color={"primary"} onClick={() => setShowForm(true)}/>  Edit
                    </CardActions> : undefined
                }
            </div>
        )
    };
    return (
    <section id="video-section-construction">
        <div className="container">
            { !showFrom ? < MainSection /> : < PressVideoForm showCallback={setShowForm}/>}
        </div>
    </section>);
}

function PressVideoForm (props) {
    const {showCallback} = props
    return (
        <Box>
            <Card>
                <CardHeader title={"Add Press video"} action={
                    <CardActions>
                        <CloseOutlined fontSize="large" color="primary" onClick={() => showCallback(false)} />
                    </CardActions>
                }/>
                <CardContent>
                <form method="POST" action="/Desclaim/Video">
                    <FormGroup sx={{ rowGap: 1, marginBottom: 4 }}>
                        <TextField name="title" variant="outlined" label="Title" required/>
                        <TextareaAutosize name="description" variant="outlined" label="Description" placeholder="Description" required/>
                    </FormGroup>
                    <FormGroup sx={{ rowGap: 2 }}> 
                        <TextField name="link" variant="outlined" label="Video link" required/>
                        <label style={{ fontSize: 12}}>Background Image (keep the size) <br/>
                            <img src="img/video-construction/1.jpg" alt="" />
                            <input type="file" name="file" style={{display: "none"}} required/>
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
