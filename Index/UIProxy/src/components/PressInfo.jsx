import { CloseOutlined, Edit } from "@mui/icons-material";
import { Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, colors, FormGroup, Input, InputLabel, TextareaAutosize, TextField } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

export function PressInfo(props) {
    const {editable} = props
    const [showFrom, setShowForm] = React.useState(false)

    const MainSection = () => {
        return (
            <>
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
                    { editable ? <CardActions sx={{border: "1px dotted grey", width: "100%", marginTop: 2, backgroundColor: "whitesmoke"}} onClick={() => setShowForm(true)} >
                        <Edit titleAccess="Edit"  fontSize="large" color={"primary"} onClick={() => setShowForm(true)}/>  Edit
                        </CardActions> : undefined
                    }
                </div>
            </>)
    }
    return <section id="welcome-to-construct">
        <div className="container">
            <div className="row">
                { !showFrom ? < MainSection /> : < PressInfoForm showCallback={setShowForm}/>}
            </div>
        </div>
    </section>;
}

function PressInfoForm(props){
    const {showCallback} = props
    return (
        <Box sx={{ marginTop: 4,  marginBottom: 4 , padding: 2 }}>
            <Card>
                <CardHeader title="Edit Press Information" action={<CardActions>
                    <CloseOutlined onClick={() => showCallback(false)} />
                </CardActions>}></CardHeader>
                <CardContent>
                <form method="POST" action="/Press/Info">
                    <FormGroup sx={{ rowGap: 1, marginBottom: 4 }}>
                        <TextField name="title" variant="outlined" label="Title" required/>
                        <TextareaAutosize name="description" variant="outlined" label="Description" placeholder="Description" required/>
                    </FormGroup>
                    <FormGroup sx={{ rowGap: 2 }}> 
                        
                        <label style={{ fontSize: 12}}>Background Image (keep the size) <br/>
                            <img src="img/welcome-to-construct/1.jpg" alt="size 421x248"/>
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