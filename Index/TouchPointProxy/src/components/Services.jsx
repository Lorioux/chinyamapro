import { AddBoxOutlined, CloseOutlined, DeleteOutline, Edit } from "@mui/icons-material"
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, FormGroup, Input, TextareaAutosize, TextField } from "@mui/material"
import { PROXY_HOSTNAME } from "../main/proxy"
import React from "react"

export default function Services(props) {
    const {editable} = props
    
    const [showFrom, setShowForm] = React.useState(false)

    const [ListOfServices, setListOfServices] = React.useState([])
    const servicePackItems = React.useRef([])
    const defaultData = React.useRef()
    const [visibleServicePack, setVisiblePack] = React.useState()

    const [visibleService, setVisibility] = React.useState()

    const handleServiceVisibility = (elem) => {
        let me = elem.target
        setVisibility(me.id)
    }

    const [registedServices, setService] = React.useState({})

    const packagesItems = React.useCallback( items => {
        const _packitems = []
        
        items.forEach((it) => {
                _packitems.push(<li key={it}><i className="fa fa-arrow-circle-o-right" />{it}</li>)
            })

        return (
            <ul>
                { _packitems}    
            </ul>)
    }, [])

    
    const ServicePackage = React.useCallback((props ) => {
        const id = props.id
        const images = props.images || ["img/service-we-provide/1.jpg", "img/service-we-provide/2.png"]
        const items = packagesItems( props.items || defaultData.current.packages )
        
        const summary = props.summary || defaultData.current.summary + " " + props.title
        // console.log(_summary)
        return (
            <div id={id} key={id}>
                <div className="col-lg-8 col-md-7 col-sm-8">
                    <p>{summary}</p>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <img src={images[0]} alt="" />
                            {/* "img/service-we-provide/1.jpg" */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            {items}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 zoomIn">
                    <img src={images[1]} alt="" /> 
                    {/* "img/service-we-provide/2.png" */}
                </div>
            </div>
        )
    }, [packagesItems])


    React.useEffect(()=>{
        const url = `${PROXY_HOSTNAME}/service/packages`
        const services = async () => fetch(url)

        services()
            .then(res => res.json())
            .then(data=> {
                defaultData.current = data.default;
                
                setService(data.services)
            })
            .catch(err => console.log(err))
        
    }, [])


    React.useEffect(()=>{
        const _services = []
        let index = 0
        let listelem  = <></>
        let svcPackagesItems = {}

        for(const svc in registedServices){
                if (index === 0 ) {
                    setVisibility(svc)
                   listelem = <li id={svc} className="active" data-tab-name={svc} key={svc} onClick={() => handleServiceVisibility } >{registedServices[svc].title}</li>
                }
                else {
                    listelem = <li id={svc} data-tab-name={svc} key={svc} onClick={(svc) => handleServiceVisibility(svc)}>{registedServices[svc].title}</li>
                }
                
                _services.push(listelem)
                index += 1

                const svc_title = registedServices[svc].title
                const svc_images = registedServices[svc].images
                const svc_summary = registedServices[svc].summary
                const svc_items = registedServices[svc].packagesItems
                const svc_package = < ServicePackage key={svc} id={svc} title={svc_title} summary={svc_summary} items={svc_items} images={svc_images} />
                svcPackagesItems[svc] = svc_package

            }

        
        setListOfServices(_services)
        servicePackItems.current = svcPackagesItems
        }, [registedServices])

    
    React.useEffect(()=>{
        const visiblepack = servicePackItems.current[visibleService]
        setVisiblePack(visiblepack)
    }, [visibleService])

    return (
        <section id="service-we-provide" className="construct">
            <div className="container">
                <div className="section-title">
                    <h1>Services that we offers</h1>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 wow slideInLeft">
                        <div className="service-tab-title">
                            <ul className="clearfix">
                                { ListOfServices }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 wow slideInRight">
                        <div className="row">                        
                            <div className="service-tab-content clearfix" >
                                { !showFrom ? visibleServicePack : < ServicePackageForm name={visibleService} showCallback={setShowForm}/> }
                            </div>
                        </div>
                    </div>
                </div>
                 { editable && !showFrom ? <CardActions sx={{border: "1px dotted grey", width: "100%", marginTop: 2}}  onClick={() => setShowForm(true)}>
                   <Edit titleAccess="Edit"  fontSize="large" color={"primary"} onClick={() => setShowForm(true)}/>  Edit
                </CardActions> :  undefined }
            </div>
        </section>
    )
}


function ServicePackageForm(props){
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
                   { notfirst && <DeleteOutline key={pck + "-2"} fontSize="large" onClick={() => handleDelPackItem()}/> }
                   { !notfirst && <AddBoxOutlined key={pck + "-1"} fontSize="large" onClick={() => handleAddPackItem()} />}
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
                        <CloseOutlined fontSize="large" color="primary" onClick={() => showCallback(false)} />
                    </CardActions>
                }/>
                <CardContent>
                    <form action={`${PROXY_HOSTNAME}/service/packages/update`} method="post" encType="multipart/form-data">
                        <FormGroup sx={{ rowGap: 2, marginBottom: 4}}>
                            <TextField name="title" placeholder="Build Construction" variant="outlined" label="Long title" required/>
                            <TextareaAutosize name="summary" placeholder="Description"required />
                        </FormGroup>
                        <FormGroup sx={{ rowGap: 4, border:'1px dotted gray', marginBottom: 4, padding: 6 }} >
                            <label id="smallimage"> Small Image (keep the size)<br/>
                                <img src="img/service-we-provide/1.jpg" alt="Small" />
                                <Input type="file" name="smallimage" id="smallimage" style={{display: "none"}} required/>
                            </label>
                            <label id="largeimage" >Large Image (keep the size)<br/>
                                <img src="img/service-we-provide/2.png" alt="Large" />
                                <Input type="file" name="lardeimage" id="smallimage" style={{display: "none"}} required/>
                            </label>
                        </FormGroup>

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

