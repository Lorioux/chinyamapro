import * as React from "react"
import render from "react-dom"
import Box from "@mui/material/Box"
import { Card, CardContent, CardHeader, List, ListItem, Typography } from "@mui/material";


class ProjectListItem extends React.Component {


    constructor(props) {
        super()
        const [id, name, value, currency, start, end, country, city, memo, images] = props;
        this.state = {
            name: name,
            value: value,
            currency: currency,
            start: start,
            end: end,
            country: country,
            city: city,
            memo: memo,
            files: images           
        }

        render (
            
            <ListItem key={id}>
                <Typography>{this.state.name}</Typography>
                <Typography>{this.state.value} {this.state.currency}</Typography>
                <Typography>{this.state.start}</Typography>
                <Typography>{this.state.end}</Typography>
                <Typography>{this.state.country}</Typography>
                <Typography>{this.state.city}</Typography>
                <Typography noWrap={true}>{this.state.memo}</Typography>
                <Typography>{
                    this.state.files.map((file, i) => <a href={`"${file}"`} key={1}> {this.state.name} photo {i} </a>)
                }
                </Typography>
            </ListItem>
        )
    }
}



export default function ProjectoList(){
    
    const [projectos, setProjectos] = React.useState([])

    React.useEffect(() => {
        async function FetchProjectos(){
            let response = await fetch("/allProjectos")
            let data = await response.json()
            setProjectos(data)
        }

        FetchProjectos()
    }, [])

    return (

        <Box>
            <Card>
                <CardHeader subheader="List of projectos" />
                <CardContent>
                <List>
                    {
                        projectos.map( (projecto) => <ProjectListItem key={projecto.id} {...projecto}/>)
                    }
                </List>
                </CardContent>

            </Card>
        </Box>

        
    )
}