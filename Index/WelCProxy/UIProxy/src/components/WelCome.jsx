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
    TextareaAutosize,
    TextField
} from "@mui/material"
import * as Icon from "@mui/icons-material"
import { Box} from "@mui/system"
import * as React from "react"




export default function WelComePlane(props) {

    const {editable} = props

    const [showForm, setShowForm] = React.useState(false)

    const [capabilities, setCapability] = React.useState({})

    const [disclaim, setDisclaim] = React.useState({})

    
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
            </div>
        )
    }

    const Disclaim = (props) => {
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
            setDisclaim(_state)
            
        })

    }, [])

    const MainCapabilitiesInfo = () => {
            const caps = []
            for (const cap in capabilities) {
                caps.push(<Capability key={cap} {...capabilities[cap]} />)
            }
            caps.push(<Disclaim key="disc" {...disclaim} />)
            return <div>{
                caps
            }
            { editable && !showForm ? <CardActions sx={{ border: "1px dotted grey"}} onClick={() => setShowForm(true)}>
                        <Icon.Edit titleAccess="Edit"  fontSize="large" color={"primary"}/> Edit
                    </CardActions> : '' }
            </div>
        }

    const MainInfoEditForms = () => {
                const caps = [<CardHeader key="header" title="Edit main business disclaim" sx={{fontSize: 24}} action={
                    <CardActions>
                        <Icon.CloseOutlined fontSize="large" color="primary" onClick={() => setShowForm(false)} />
                    </CardActions>
                }/>]
                for (const cap in capabilities) {
                    caps.push(<CapabilityForm key={cap} {...capabilities[cap]} />)
                }
                caps.push(<DisclaimForm  key="disc" {...disclaim} />)
                return <Box  sx={{ marginTop: 2, padding: 2}} >
                    <Card sx={{ padding: 4}} >
                        {caps}
                    </Card>                    
                </Box>
            }
        
    
    return (
        <section id="construction-welcome">
            <div className="container">
                <div className="row">
                    <div>
                        { !showForm ? MainCapabilitiesInfo() : MainInfoEditForms()}
                        {/* { MainDisclaim ()} */}
                    </div>
                    
                </div>
            </div>
        </section>
    )
}


const CapabilityForm = (props) => {
    const {title, summary} = props

    const sx = { border: "1px dotted grey", marginBottom: 4 }
    return (
        
        <div sx={{ padding: 4}}>
            {/* <CardHeader title={"Service area"} /> */}
            <CardContent sx={{ borderTop: "1px solid grey"}}>
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
                    <label style={{ padding: 4 }}>Service Image (keep the size) <br/>
                        <img src={"img/construction-welcome/1.jpg"} alt="" />
                        <Input type="file" name={"imagelnk"} sx={{
                            padding: 5,
                            display: "none"
                        }} required/>
                    </label>
                </FormGroup>
                <ButtonGroup>
                    <Button type="submit">save</Button>
                </ButtonGroup>
            </form>
            </CardContent>
        </div>
        
    )
}

const DisclaimForm = (props) => {
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
        <div sx={{ padding: 4}}>
            {/* <CardHeader title="HighLight" /> */}
            <CardContent sx={{ borderTop: "1px solid grey"}}>
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
        </div>
       
    )
}

const ServicePackageForm = (props) =>{
    const {name, showCallback} = props
    
    const [packItems, setPackItem] = React.useState(1)
    const [packItemFields, setPackItemField] = React.useState([])

    const handleAddPackItem = () => {
        const items = packItems + 1
        setPackItem(items)
    }

    const handleDelPackItem = () => {
        const items = packItems - 1
        setPackItem(items)
    }

    React.useEffect(() => {
        const packFields = []
        let field = <></>
        const range = [...Array(packItems).keys()]
        for (var pck in range){
            console.log(pck)
            const notfirst = pck >= 1
            field = <>
                <TextField key={pck + "-0"} name="packageitem" variant="outlined" placeholder="Package" label="Package Item" required />
                <div style={{ display: "grid", gridTemplateRows: "24px 24px" }}>
                   { notfirst && <Icon.DeleteOutline key={pck + "-2"} fontSize="large" onClick={() => handleDelPackItem()}/> }
                   { !notfirst && <Icon.AddBoxOutlined key={pck + "-1"} fontSize="large" onClick={() => handleAddPackItem()} />}
                </div>
            </>
            
            packFields.push(field)
        }

        setPackItemField(packFields)

    }, [packItems])

    return (
        <Box>
            <Card>
                <CardHeader title={ "Edit " + name + " service" || "Add new service"} action={
                    <CardActions>
                        <Icon.CloseOutlined fontSize="large" color="primary" onClick={() => showCallback(false)} />
                    </CardActions>
                }/>
                <CardContent>
                    <form action="/Service/add" method="post" encType="multipart/form-data">
                        <FormGroup sx={{ rowGap: 2, marginBottom: 4}}>
                            <TextField name="title" placeholder="Build Construction" variant="outlined" label="Long title" required/>
                            <TextareaAutosize name="summary" placeholder="Description"required />
                        </FormGroup>
                        {/* <FormGroup sx={{ rowGap: 4, border:'1px dotted gray', marginBottom: 4, padding: 6 }} >
                            <label id="smallimage"> Small Image (keep the size)<br/>
                                <img src="img/service-we-provide/1.jpg" alt="Small" />
                                <Input type="file" name="smallimage" id="smallimage" style={{display: "none"}} required/>
                            </label>
                            <label id="largeimage" >Large Image (keep the size)<br/>
                                <img src="img/service-we-provide/2.png" alt="Large" />
                                <Input type="file" name="lardeimage" id="smallimage" style={{display: "none"}} required/>
                            </label>
                        </FormGroup> */}

                        <FormGroup sx={{ 
                            rowGap: 2, border:'1px dotted gray', 
                            marginBottom: 4,  padding: 4,
                            display: "grid",
                            gridTemplateColumns: '1fr 24px'
                            }}>
                            { packItemFields } 
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