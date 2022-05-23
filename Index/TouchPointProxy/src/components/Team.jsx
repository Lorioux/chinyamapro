import { 
    AddSharp,
 } from "@mui/icons-material"
import { 
    Box,
    Button, 
    ButtonGroup, 
    Card, 
    CardContent, 
    FormGroup, 
    Input,
    ListItem,
    TextareaAutosize,
    Typography 
} from "@mui/material"
import { PROXY_HOSTNAME } from "../main/proxy"
import * as React from "react"


const Member = (props) => {
    const {fullname, summary, photo, socialmedia } = props


    const mockname = fullname || "Hendrick jack"
    const mocksummary = summary || "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con"
    

    const mockmedia = socialmedia? () => {
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
        return _sociallinks
    } :
    () => <>
        <li><a href="#"><i className="fa fa-facebook" /></a></li>
        <li><a href="#"><i className="fa fa-twitter" /></a></li>
        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
    </>
    
    return (
        <div className="item">
            <div className="single-construct-member">
                <div className="img-holder">
                    <img src={ photo || "img/our-team-construct/1.png" } alt="" />
                </div>
                <div className="content hvr-bounce-to-bottom">
                    <h2>{mockname}</h2>
                    <p>{mocksummary}</p>
                    <ul>
                        {mockmedia()}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const MemberForm = (props) => {

    const sx = {
        marginBottom: 4,
        padding: 2
    }

    const LinkField = (i) => {
        return (
            <Input key={"link-" + i} 
                sx={sx}
                type="text" name={"link-"+i} 
                placeholder="https://linkedin.com"/>
        )
    }

    const [sociallinkFields, setLinkField] = React.useState([LinkField(0)])

    const linkfields = sociallinkFields
   

    const handleAddField = () => {
        let index = linkfields.length
        linkfields.push(LinkField(index))
        console.log(sociallinkFields)
    }

    React.useEffect(() => {
        setLinkField(linkfields)
    }, [linkfields])

    const url = `${PROXY_HOSTNAME}/team/member/add`
    return (
        <Box>
            <Card>
                <CardContent>
                <form method="POST" action={url}>
                    <FormGroup sx={sx}>
                        <Input type="text" name="fullname" placeholder="Full name"/>
                    </FormGroup>
                    <FormGroup sx={sx}>
                        <TextareaAutosize name="summary" />
                    </FormGroup>
                    <FormGroup sx={sx}>
                        <Input type="file" name="photo" />
                    </FormGroup>
                    <FormGroup sx={sx}>
                        {sociallinkFields}
                    </FormGroup>
                    
                    <ButtonGroup sx={sx}>
                        <Button type="submit">save</Button>
                        <Button onClick={handleAddField}>
                            <AddSharp fontSize="small" />
                            add another link
                        </Button>
                    </ButtonGroup>
                </form>
                </CardContent>
            </Card>
        </Box>
    )

}

export default function TeamPlane(props) {

    // const {editable} = props

    const [members, setMembers] = React.useState([])
    
    React.useEffect(() => {
        const url = `${PROXY_HOSTNAME}/team/info`
        let _members = []
        const FetchSocialLinks =  async () => fetch(url)
        FetchSocialLinks().then(res => res.json())
        .then( members => {
            members.forEach((m,i) => {
                _members.push(<Member key={i} {...m}/>)
            })
        })
        .catch( err => {
            _members = [
                <Member key={0} />,
                <Member key={1} />,
                <Member key={2} />,
                <Member key={3} />,
                <Member key={4} />
            ]
        })
        .finally(()=>{
            setMembers(_members)
        })
    }, [])


    return (
        <section id="our-team-construct">
            <div className="container">
                <div className="section-title">
                    <h1>Our dedicated team</h1>
                </div>
                <div className="owl-carousel owl-theme">
                    {members}
                </div>
            </div>
        </section>
    )
}


const TemaMembers = () => {

    const [members, setMembers] = React.useState([])

    React.useEffect(() => {
        const url = `${PROXY_HOSTNAME}/team/members`
        const Members = async () => fetch(url)

        Members().then( res => res.json).then(
            data => {
                setMembers(data)
            } 
        )
    })

    
}

const MemberListItem = (props) => {

    const {fullname, summary, photo, socialmedia} = props

    return (
        <ListItem>
            <Typography>{fullname}</Typography>
            <Typography>{summary}</Typography>
            <Typography>{photo}</Typography>
            <Typography>{socialmedia}</Typography>
        </ListItem>
    )
}