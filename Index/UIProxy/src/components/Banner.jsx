import * as React from "react"

import Box from "@mui/material/Box"
import { 
    Button, 
    ButtonGroup, 
    Card, 
    CardContent,  
    FormGroup, 
    TextareaAutosize, 
    TextField 
} from "@mui/material"

// import {AddOutlined} from "@mui/icons-material"

export default function PageBanner() {
    // const [edit, setEdit] = React.useState(true)
    
    // const handleEdit = (e) => {
    //     let status = edit? !edit : !edit
    //     setEdit(status)   
    // }
    return (
        <section className="rev_slider_wrapper construct-banner-wrapper">
            {/* <IconButton onClick={handleEdit}>
                <AddOutlined />
            </IconButton> */}
            <div id="slider1" className="rev_slider" data-version={5.0}>
                <ul>
                    {BannerCaptionOne()}
                    {BannerCaptionTwo()}
                    {BannerCaptionThree()}
                </ul>
            </div>
        </section>
    )

    function BannerCaptionThree() {
        const [image, setImage] = React.useState("img/slides/image3.jpg")
        const [headers, setHeader] = React.useState({ primary: "", secondary: ""})
        const [summary, setSummary] = React.useState(<></>)
        const [more_link, setMoreLink] = React.useState("") 

        React.useEffect(() => {

            setImage("img/slides/image3.jpg")
            setHeader({ primary: "We Are The Leader", secondary: "In Construction Company"})
            setSummary(<p className="text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore."</p>)
            setMoreLink("")
        }, [])

        return (
            <li data-transition="fade">
                <img src={image} alt data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="center" data-hoffset={0} data-y="top" data-voffset={205} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={700}>
                    <h2><b>{headers.primary}</b></h2>
                </div>
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="center" data-hoffset={0} data-y="top" data-voffset={255} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1000}>
                    <h2>{headers.secondary}</h2>
                </div>
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="center" data-hoffset={0} data-y="top" data-voffset={320} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1300}>
                    <span className="border" />
                </div>
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="center" data-hoffset={0} data-y="top" data-voffset={315} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1600}>
                    {summary}
                </div>
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="center" data-hoffset={0} data-y="top" data-voffset={410} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1900}>
                    <a href={ more_link !== "" ? more_link : "#" } className="hvr-bounce-to-right">Learn More</a>
                </div>
            </li>
        )
        
    }

    function BannerCaptionOne(props) {
        const [image, setImage] = React.useState("img/slides/image1.jpg")
        const [headers, setHeader] = React.useState({ primary: "", secondary: ""})
        const [summary, setSummary] = React.useState(<></>)
        const [more_link, setMoreLink] = React.useState("") 

        React.useEffect(() => {

            setImage("img/slides/image1.jpg")
            setHeader({ primary: "We Are Available For", secondary: "Any Construction Work"})
            setSummary(<p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Conse <br /> quatur  earum iusto tempora nesciunt enim harum architecto, <br /> quis culpa ducimus deleniti, labore. Libero magnam"</p>)
            setMoreLink("")
        }, [])
        return (
            <li data-transition="fade">
                <img src={image} alt data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="right" data-hoffset={0} data-y="top" data-voffset={205} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={500}>
                    <h2><b>{headers.primary}</b></h2>
                </div>
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="right" data-hoffset={20} data-y="top" data-voffset={265} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={800}>
                    <h2>{headers.secondary}</h2>
                </div>
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="right" data-hoffset={15} data-y="top" data-voffset={330} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1100}>
                    <ul>
                        <li><span>Domestic</span></li>
                        <li><span>Commercial</span></li>
                        <li><span>Industrial</span></li>
                    </ul>
                </div>
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="right" data-hoffset={0} data-y="top" data-voffset={350} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1400}>
                    {summary}
                </div>
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="right" data-hoffset={315} data-y="top" data-voffset={480} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1700}>
                    <a href={more_link !== "" ? more_link : "#"} className="hvr-bounce-to-right">Learn More</a>
                </div>
            </li>
        )
    }

    function BannerCaptionTwo() {
        const [image, setImage] = React.useState("img/slides/image2.jpg")
        const [headers, setHeader] = React.useState({ primary: "", secondary: ""})
        const [summary, setSummary] = React.useState(<></>)
        const [more_link, setMoreLink] = React.useState("") 

        React.useEffect(() => {
            setImage("img/slides/image2.jpg")
            setHeader({ primary: "We Renovate", secondary: "Your home with heart"})
            setSummary(<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore."</p>)
            setMoreLink("")
        }, [])

        return (
            <li data-transition="fade">
                <img src={image} alt data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="left" data-hoffset={270} data-y="top" data-voffset={205} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={500}>
                    <h2>{headers.primary}</h2>
                </div>
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="left" data-hoffset={280} data-y="top" data-voffset={255} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1000}>
                    <h2>{headers.secondary}</h2>
                </div>
                <div className="tp-caption sfl tp-resizeme construct-banner-caption" data-x="left" data-hoffset={290} data-y="top" data-voffset={320} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1500}>
                    <span className="border" />
                </div>
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="left" data-hoffset={290} data-y="top" data-voffset={315} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={2000}>
                    {summary}                    
                </div>
                <div className="tp-caption sfb tp-resizeme construct-banner-caption" data-x="left" data-hoffset={290} data-y="top" data-voffset={410} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={2500}>
                    <a href={ more_link !== "" ? more_link : "#"} className="hvr-bounce-to-right">Learn More</a>
                </div>
            </li>
        )
    }
}


export function Banner(){

    const [banner, setBanner] = React.useState({
        "header": "", "subheader": "", "summary": ""

    })

    const handlePrimaryHeader = (e) =>{
        let s = e.target.value
        setBanner({ header : s })
    }

    const handleSubHeader = (e) =>{
        let s = e.target.value
        setBanner({subheader: s})
    }

    const handleSummary = (e) => {
        let s = e.target.value
        setBanner({ summary: s})
    }

    return (
        <Box>

            <Card>
                <CardContent>
                <form action="AddBanner" method="post" encType="multipart/form-data">
                    <FormGroup sx={{ display: "flex", flexFlow: "column wrap",  rowGap: 4 }}>

                        <TextField name="header" label="Header" required
                            value={banner.header}
                            onChange={handlePrimaryHeader}
                            InputLabelProps={{ shrink: true }}></TextField>

                        <TextField name="subheader" label="Subheader" required
                            value={banner.subheader}
                            InputLabelProps={{ shrink: true }} 
                            onChange={handleSubHeader}></TextField>

                        <TextareaAutosize required
                            id="summary"
                            autoComplete="on"
                            style={{ padding: 4}}
                            name="summary" minRows={5} maxRows={5}
                            placeholder="Summary" value={banner.summary}
                            onChange={handleSummary}></TextareaAutosize> 
                                   
                    </FormGroup>
                    <FormGroup sx={{ marginTop: 10}}>
                        <input type="file" id="file" name="file" accept=".jpg, .png, .jpeg, .svg, .webp, .gif"/> 
                    </FormGroup>
                    <ButtonGroup sx={{ marginTop: 4}}>
                        <Button type="submit">SAVE</Button>
                    </ButtonGroup>
                </form>
                </CardContent>
            </Card>
        </Box>
    )
}