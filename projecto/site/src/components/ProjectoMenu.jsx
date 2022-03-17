import * as React from "react"
import { Card, CardActions, CardHeader, Button} from "@mui/material"

import Box from "@mui/material/Box"

export default function Menu(props){

    const {onCreateCallback, onListActionCallback} = props

    return (
        <Box
            sx={{width: '100%'}}>
            <Card>
                <CardHeader title={"Projecto Management Plane"}/>
                <CardActions>
                    <Button onClick={onCreateCallback} variant="outlined">
                        Create new projecto
                    </Button>
                    <Button onClick={onListActionCallback} variant="outlined">
                        List projectos
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}