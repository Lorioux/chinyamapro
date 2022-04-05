import { 
    Button, 
    ButtonGroup, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    FormControl, 
    FormGroup, 
    Input, 
    TextareaAutosize
} from "@mui/material"
import * as Icon from "@mui/icons-material"
import { Box} from "@mui/system"
import * as React from "react"




export default function WelComePlane(props) {

    const {editable} = props

    const [capabilities, setCapability] = React.useState({})

    const [desclaim, setDesclaim] = React.useState({})

    const [editcapability, EnableCoreService] = React.useState(false)
    const [editdesclaim, EnableCoreDesclaim] = React.useState(false)


    const EditEnabler = (EnablerCallback) => {

        return (
            <CardActions sx={{ border: "1px dotted grey"}} onClick={() => {
                let status = !editcapability
                EnablerCallback(status)
            }}>
                <Icon.Edit fontSize="large" titleAccess="Edit service" /> Edit
            </CardActions>
        )
    }
    
    const Capability = (props) => { 

        const {imagelnk, title, summary} = props
       
        const mocktitle = "Construction"
        const mocksummary = "Lorem ipsum dolor sit amet, cons ectetur elit. Ves tibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor."
        const mockimg = "img/construction-welcome/1.jpg" //|| "img/construction-welcome/2.jpg"

        return(
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 single-construction-welcome">
                <div className="img-holder hvr-rectangle-out">
                    <img src={imagelnk === undefined? mockimg : imagelnk} alt="" />
                </div>
                <h2>{title === undefined? mocktitle: title}</h2>
                <p>{summary === undefined? mocksummary: summary}</p>
                { editable ? EditEnabler(EnableCoreService) : '' }
            </div>
        )
    }

    const Desclaim = (props) => {
        const {title, summary, offers} = props
        return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0 single-construction-welcome">
                <h1>{title}</h1>
                <p>{summary}</p>
                <ul>
                    { offers ? offers.map( (offer, i) => <li key={i}><i className="fa fa-arrow-circle-o-right" /> {offer} </li> ) : ''}
                </ul>
            </div>
        )
    }


    React.useEffect(() => {
        const _caps = {}

        fetch("/Capability/Info").then(res => res.json())
        .then(caps => {
            for(const cap in caps){
                _caps[cap.title] = { title: cap.title, summary: cap.summary, imagelnk: cap.imagelnk }
            }
        })
        .catch(err => {
            // console.error(err)
            _caps["construction"] = { title: "Construction" }
            _caps["renovation"] = { title: "Renovation" }
        })
        .finally(() => {
            setCapability(_caps)
        }) 
    }, [])

    const _offers = React.useRef([])

    React.useEffect(() => {
        
        let title = ""
        let summary = ""

        const FetchServiceInfo = async () => fetch("/Core/Service/Offers")
        
        FetchServiceInfo().then(res => res.json())
        .then(data => {
            _offers.push(data.offers)
            title = data.title 
            summary= data.summary
        })
        .catch(err => {
            // console.err(err)
            _offers.current["offers"] = [
                "Interior design Package",
                "Reparing of Residentail Roof",
                "Hardwood Flooring",
                "Renovaion of Commercial Office",
                "Make Quality Products"
            ]
            title = "Wecome to ConstructPress"
            summary = "Lorem ipsum dolor sit amet, cons ectetur elit. Vestib ulum nec odios Suspe ndisse cursus mal suada fact lisis. Lorem ipsum dolor sit."
        })
        .finally(() => {
            const _state = { offers: _offers.current.offers, title: title, summary: summary}
            setDesclaim(_state)
            
        })

    }, [])

    const desclaimVisibility = editdesclaim ?
        <DesclaimEditable {...desclaim} /> :
        <Desclaim {...desclaim} />

    const capabilityVisibility = editcapability ?
        () => {
            const caps = []
            for (const cap in capabilities) {
                caps.push(<CapabilityEditable key={cap} {...capabilities[cap]} />)
            }
            return caps
        } :
        () => {
            const caps = []
            for (const cap in capabilities) {
                caps.push(<Capability key={cap} {...capabilities[cap]} />)
            }
            return caps
        }
    
    return (
        <section id="construction-welcome">
            <div className="container">
                <div className="row">
                    <div>
                        {capabilityVisibility()}
                    </div>
                    <div>
                        { desclaimVisibility }
                    </div>
                </div>
            </div>
        </section>
    )
}


const CapabilityEditable = (props) => {
    const {title, summary} = props

    const sx = { border: "1px dotted grey", marginBottom: 4 }
    return (
        <Box  sx={{ marginTop: 2, padding: 2}} >
            <Card sx={{ padding: 4}} >
                <CardHeader title={"Service area"} />
                <CardContent>
                <form style={{ rowGap: 4}} method="POST" action="/Core/Service/Create" encType="multipart/form-data">
                    <FormGroup sx={sx}>
                        <FormControl>
                            <input name={"title"} placeholder="Name" defaultValue={title} type="text" required/>
                        </FormControl>
                    </FormGroup>
                    <FormGroup sx={sx}>
                        <FormControl>
                            <TextareaAutosize name={"summary"} placeholder={ summary || "Summary"} type="text" required/>
                        </FormControl>
                    </FormGroup>
                    <FormGroup sx={sx}>
                        <FormControl  >
                            <Input type="file" name={"imagelnk"} sx={{
                                padding: 5
                            }} required/>
                        </FormControl>
                    </FormGroup>
                    <ButtonGroup>
                        <Button type="submit">save</Button>
                    </ButtonGroup>
                </form>
                </CardContent>
            </Card>
        </Box>
    )
}

const DesclaimEditable = (props) => {
    const {title, summary, offers} = props

    const inStyle = { style : 
        { fontSize: 16}
    }

    const offerFields = offers === undefined? () => [] : () => {
            const _offers = []
            if (offers === undefined) return
            for( const i in offers){
                let placeholder = offers[i]
                _offers.push( offer(i, placeholder) )
            }
            
            return _offers
        }
    
    const offer = (index, placeholder) => {
        return (
            <FormGroup key={"offer-" + index} sx={{ marginTop: 4}}>
                <Input name={"offer-" + index} value={placeholder} {...inStyle} required/>
            </FormGroup>
        )
    }

    const sx={marginTop: 4}

    return (
       <Box sx={{ marginTop: 2, padding: 2}}>
            <Card sx={{ padding: 4}}>
                <CardHeader title="HighLight" />
                <CardContent>
                    <form style={{ rowGap: 4 }}>
                        <FormGroup sx={sx}>
                            <Input type="text" name="title" value={title} {...inStyle} required/>
                        </FormGroup>
                        <FormGroup sx={sx}>
                            <TextareaAutosize name="summary" value={summary} {...inStyle} maxRows={5} required />
                        </FormGroup>
                        <>{offerFields()}</>
                        <ButtonGroup sx={sx}>
                            <Button type="submit">save</Button>
                        </ButtonGroup>
                    </form>
                </CardContent>
            </Card>
       </Box>
    )
}