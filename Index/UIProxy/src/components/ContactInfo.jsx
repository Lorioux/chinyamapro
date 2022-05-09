import { 
    Box, 
    CardContent, 
    FormGroup, 
    Card, 
    Input, 
    ButtonGroup, 
    Button, 
    CardHeader, 
    InputLabel,
    Select, 
    MenuItem,
    ListItemIcon,
    FormControl
    } from "@mui/material"
import * as Icon from "@mui/icons-material"
import * as React from "react"


export default function BreadCrumbInfo() {
    const [socialmedia, setSocialMedia] = React.useState({
        "facebook": "#",
        "skype": "#"
    })

    const [contactinfo, setContactInfo] = React.useState({
        telfix: "+1234567890",
        email: "info@constructpress.com",
        mobile: "+ (1800) - 654 - 896",
        place: "56, Building- Avenue-96, New York"
    })

    const [sociallinks, setLinks] = React.useState([])

    React.useEffect(() => {
        const media = async () => fetch("/SocialMedia/Info")
        media()
            .then(response => response.json())
            .then( data => {
                setSocialMedia(data)
            })
            .catch( reason => console.log(reason))
    }, [])

    React.useEffect(() => {
        const contact = async () => fetch("/Contact/Info")
        contact()
            .then(response => response.json())
            .then( data => {
                let place = data.road + ", " + data.floorno + ", " + data.doorno + ", " + data.zipcode + ", " + data.city
                data["place"] = place
                setContactInfo(data)
            })
            .catch(error => console.log(error))

    },[])

    React.useEffect(() => {
        const _sociallinks = []
        for (const k in socialmedia) {
            let v = socialmedia[k]
            if ( k === "facebook") _sociallinks.push(<li key={k}><a href={v}><i className="fa fa-facebook-square" /></a></li>)
            if ( k === "twitter") _sociallinks.push(<li key={k}><a href={v}><i className="fa fa-twitter" /></a></li>)
            if ( k === "skype") _sociallinks.push(<li key={k}><a href={v}><i className="fa fa-skype" /></a></li>)
            if ( k === "pinterest") _sociallinks.push(<li key={k}><a href={v}><i className="fa fa-pinterest" /></a></li>)
            if ( k === "dribble" ) _sociallinks.push(<li key={k}><a href={v}><i className="fa fa-dribbble" /></a></li>)
            if ( k === "linkedin" ) _sociallinks.push(<li key={k}><a href={v}><i className="fa fa-linkendin" /></a></li>)
        }

        setLinks(_sociallinks)

    }, [socialmedia])

    return <section id="topbar" className="construct">
        <div className="container">
            <div className="row">
                <div className="social pull-right">
                    <ul>
                        {sociallinks}
                    </ul>
                </div> {/* /.social */}
                <div className="contact-info pull-left">
                    <ul>
                        <li><a href={`"tel:${contactinfo.telfix}"`}><i className="fa fa-map-marker" />{contactinfo.place}</a></li>
                        <li><a href={`"mailto:${contactinfo.email}"`}><i className="fa fa-envelope" />{contactinfo.email}</a></li>
                        <li><a href={`"tel:${contactinfo.mobile}"`}><i className="fa fa-phone" />{contactinfo.mobile}</a></li>
                    </ul>
                </div> {/* /.contact-info */}
            </div>
        </div>
    </section>
}

export const ContactsInfo = () => {

    const sxgroup = { rowGap: 4, border: "1px dotted gray", padding: 4, marginBottom: 4} 
    return (
        <Box>
            <Card>
                <CardHeader>Contact Information</CardHeader>
                <CardContent>
                    <form action="/Contact/Create" method="POST" id="contactinfo">
                        <InputLabel id="place" sx={{ marginBottom: 2}} >Business Phones</InputLabel>
                        <FormGroup sx={sxgroup} id="call">
                            <Input type={"tel"} name="telfix" placeholder="Telephone" required/>
                            <Input type={"tel"} name="mobile" placeholder="Mobile" required/>
                            <Input type={"email"} name="email" placeholder="Email@chinyama.co.moz" required/>
                            
                        </FormGroup>
                        <InputLabel id="place" sx={{ marginBottom: 2}}>Business Address</InputLabel>
                        <FormGroup sx={sxgroup} id="place">
                            <Input type={"text"} name="state" placeholder="State/Province" required/>
                            <Input type={"text"} name="city" placeholder="City" required/>                            
                            <Input type={"text"} name="road"  placeholder="Street/Reoad" required/>
                            <Input type={"text"} name="zipcode"  placeholder="Postal Code" required/>
                            <Input type={"text"} name="floorno"  placeholder="Flat" required/>
                            <Input type={"number"} name="doorno" placeholder="Door Nº" required/>
                        </FormGroup>
                        <ButtonGroup>
                            <Button type="submit">Save</Button>
                        </ButtonGroup>
                    </form>
                </CardContent>
            </Card>
        </Box>
    )

}



export const SocialMediaInfo = () => {
    const [medianame, setName] = React.useState("fa fa-facebook")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const options = [
        <MenuItem key={"face"} value="fa fa-facebook">
            <ListItemIcon>
                <Icon.Facebook fontSize="medium"/> Facebook
            </ListItemIcon>
        </MenuItem>,
        <MenuItem key={"skype"} value="fa fa-skype">
            <ListItemIcon>
                <Icon.CloudCircle fontSize="medium"/> Skype
            </ListItemIcon>
        </MenuItem>,
        <MenuItem key={"link"}value="fa fa-skype">
            <ListItemIcon>
                <Icon.LinkedIn fontSize="medium"/> Linkedin
            </ListItemIcon>
        </MenuItem>
    ]

    const mainformgro = (k, _groups = []) => {
        const group = (ke) => { 
            return (
                <FormGroup
                    id="linkgroup"
                    key={"formgro-"+ke}
                    sx={{ 
                        border: "1px dotted gray",
                        marginBottom: 4, 
                        display: "grid",
                        gridTemplateColumns: "1fr 25%", 
                        columnGap: 2,
                        justifyContent: "start",
                        padding: 4
                        }}>
                    
                    <FormControl
                        variant="outlined">

                        <InputLabel id="link">Social media link </InputLabel>
                        <Input type="text"  placeholder="https://www.socialmedia.com" id="link" name="link" required/>
                    </FormControl>
                    <FormControl>
                        <Select name="mediaico" type={"text"}
                            id="mediaico"
                            value={medianame}
                            onChange={handleNameChange}
                            required
                            variant="outlined"
                            >
                            {options}
                        </Select>
                    </FormControl>
                </FormGroup>
            )
        }
        
        if (k === undefined ) return formgros.copy()

        const groups = _groups

        groups.push(group(k))

        return groups
    }
    
    const [formgros, setGroups] = React.useState(mainformgro(0, []))


    const handleAddGroup = () => {
        
        let key = formgros.length

        setGroups(mainformgro(key, formgros))
    }

    return (
        <Box>
            <Card>
                <CardContent>
                    <form method="POST" action="SocialMedia/Create" encType="application/json"     
                        id="socialmedia">
                        {
                          formgros
                        }
                        <ButtonGroup id="actions">
                            <Button type="submit">save</Button>
                            <Button 
                                onClick={handleAddGroup}>
                                <Icon.AddSharp fontSize="small" />
                                add another
                            </Button>
                        </ButtonGroup>
                        
                    </form>
                </CardContent>
            </Card>
        </Box>
    )
}