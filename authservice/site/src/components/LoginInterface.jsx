import * as React from "react"
import { Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField } from "@mui/material"
import { CloseOutlined } from "@mui/icons-material"




export default function Login(props){
    const {open, visibilityCallback} = props 

    return (
        <Dialog 
            fullScreen
            open={open}
            >
            {/* <DialogTitle>Login</DialogTitle> */}
            <DialogActions>
                <IconButton onClick={(e) => visibilityCallback(e, "close")}>
                    <CloseOutlined/>
                </IconButton>
            </DialogActions>
            <Divider />
            <DialogContent 
                sx={{
                    display: "flex",
                    flexFlow: "column wrap",
                  backgroundColor: "whitesmoke",
                  justifyContent: "center top"
                }}
                >
                <Card 
                    sx={{ maxWidth: 800, minWidth: 600, alignSelf: "center" }}
                    >
                    <CardHeader title="Authenticate"/>
                    
                    <CardContent>
                        <form 
                            method="POST"
                            style={{ display: "flex", flexFlow: "column wrap", rowGap: 24}} >
                            <TextField name="username" variant="outlined" label="Username" required />
                            <TextField type={"password"} name="passphrase" variant="outlined" label="Password" required/>
                            <ButtonGroup>
                                <Button type={"submit"} >SUBMIT</Button>
                            </ButtonGroup>
                        </form>
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    )
}