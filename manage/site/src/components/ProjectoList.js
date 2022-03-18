import * as React from "react"
// import ReactDOM from "react-dom"
import Box from "@mui/material/Box"
import { Card, CardContent, CardHeader, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { grid } from "@mui/system";
import { DeleteOutlined } from "@mui/icons-material";




function ProjectListItem(props){
    const {projecto } = props
    const files = projecto.images
    // const [projecto, setprojecto] = React.useprojecto({
    //     "id": projecto.id,
    //     name: projecto.name,
    //     value: projecto.value,
    //     currency: projecto.currency,
    //     start: projecto.start,
    //     end: projecto.end,
    //     country: projecto.country,
    //     city: projecto.city,
    //     memo: projecto.memo,
    //     files: projecto.images          
    // })
    

    const handleDeleteProjecto = (e) => {
        const me = e.currentTarget

        fetch(`deleteProjecto/${me.id}`, {
            method: "GET",
            redirect: "follow",
            credentials: "same-origin",
            cache: "reload"
        }).then(response => {
            if (response.ok){
                window.location.href = response.url
            }
            else {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
        })
        .catch((reason) => {
            console.log(reason)
        })
    }

    return(
        
        <ListItem 
            key={projecto.id} 
            sx={{
                display: grid,
                gridTemplateColumns: "10% 5% 5% 5% 10% 10% 30% 20% 5%",
                columnGap: 4,
                '&: hover': {
                    backgroundColor: "whitesmoke"
                }
            }}
            secondaryAction={
                <IconButton id={projecto.id} onClick={handleDeleteProjecto}>
                    <DeleteOutlined />
                </IconButton>
            }>
            <ListItemText>{projecto.name}</ListItemText>
            <ListItemText>{projecto.value} {projecto.currency}</ListItemText>
            <ListItemText>{projecto.start}</ListItemText>
            <ListItemText>{projecto.end}</ListItemText>
            <ListItemText>{projecto.country}</ListItemText>
            <ListItemText>{projecto.city}</ListItemText>
            <ListItemText primary="Single-line">{projecto.memo}</ListItemText>
            <ListItemText>{
                files.map((file, i) => <><a href={`${file}`} key={i}> {projecto.name} photo {i} </a> <br/></>)
            }
            </ListItemText>
            
        </ListItem>
    )
}



export default function ProjectoList(){
    
    const [projectos, setProjectos] = React.useState([])

    React.useEffect(() => {
        async function FetchProjectos(){
            let response = await fetch("/allProjectos")
            let data = await response.json()
            // console.log(data)
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
                        projectos.map( (projecto) => <ProjectListItem key={projecto.id} projecto={projecto}/>)
                    }
                </List>
                </CardContent>
            </Card>
        </Box>

        
    )
}