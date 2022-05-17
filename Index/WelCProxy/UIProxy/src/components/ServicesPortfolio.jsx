import { Box, Button, ButtonGroup, Card, CardContent, FormGroup, Input, MenuItem, Select, TextareaAutosize, TextField } from "@mui/material";
import React from "react";


export default function ServicesPortfolio(props) {
    const {editable} = props
    const [PortfolioProofs, setPortfolioProof] = React.useState([])
    const [PortfolioAreas, setPortfolioAreas] = React.useState([])

    const ServiceProof = (props)=>{

        const {id, title, summary, image} = props

        return (
            <div key={id} className="single-project-item mix  tank outside">
                <div className="img-wrap">
                    <img src={ "img/project-v4/1.jpg"} alt="" /> 
                    <div className="content-wrapper hvr-sweep-to-right">
                        <div className="content">
                            <div className="button-box">
                                <a className="fancybox" data-fancybox-group="home-gallery" title={title} href={ "img/project-v4/1.jpg"} ><i className="fa fa-search-plus" /></a>
                            </div>
                            <div className="text-box">
                                <h4>{title}</h4>
                                <span>{summary}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const PortfolioArea = React.useCallback((props) => {
        const {id, title} = props
        return (
            <li data-filter={"."+id}>
                <span>{title}</span>
            </li>
        )
    }, []);

    React.useEffect(() => {
        const portfolioAreas = [<li className="active" key={"all"} data-filter="all"><span>All</span></li>]
        const perServicePortfolio = []

        const portfolio = async () => fetch("/Service/Portfolio")
        portfolio()
            .then(res => res.json())
            .then(data => {
                
                const services = data.services
                for(const svc in services){
                    
                    portfolioAreas.push(<PortfolioArea key={svc} id={svc} title={services[svc].title} />)
                    
                    const proof = services[svc]
                    if (proof.portfolio !== null) {
                        proof.portfolio.forEach((p, i) => {
                            perServicePortfolio.push(<ServiceProof key={svc + "-" + i } id={svc} title={proof.title} image={p.image} summary={p.summary}/>)
                        })
                    }
                    else {
                        let id = "."+svc, title= proof.title, image=proof.images, summary=proof.summary
                        perServicePortfolio.push({ id:id, title:title, image:image, summary:summary})
                    }  
                }
                setPortfolioProof(perServicePortfolio)
                setPortfolioAreas(portfolioAreas)
            })
            .catch(err => {
                console.log(err)
            })

    },[])

    // React.useEffect(() => {
        
    //     setPortfolioProof(evidences.current)

    // }, [PortfolioAreas])

    const Section = (
        <section id="project-version-one" className="construct home">
            <div className="container">
                <div className="section-title">
                    <h1>our latest projects</h1>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="gallery-filter">
                            { PortfolioAreas.map((e) => <>{e}</>)}
                        </ul>
                    </div>
                </div>
                <div className="row normal-gallery gallery-v4" id="image-gallery-mix">
                    {PortfolioProofs.map((e, i) => (
                        <img key={i} src={ "img/project-v4/1.jpg"} alt="" />
                    ) )}
                </div>
                <div className="view-all-btn text-center"><a href="project-v1.html" className="view-all hvr-bounce-to-right">view all</a></div>
            </div>
        </section>
    );
    return <>{ !editable? Section : < ServicePortfolioForm />}</>
}


function ServicePortfolioForm (props){

    return (
        <Box>
            <Card>
                <CardContent>
                <form action="/Service/add" method="post" encType="multipart/form-data">
                        <FormGroup sx={{ rowGap: 2, marginBottom: 4}}>
                            <Select name="service">
                                <MenuItem key={"one"}>Build Construction</MenuItem>
                            </Select>
                        </FormGroup>
                        <FormGroup sx={{ rowGap: 2, marginBottom: 4}}>
                            <TextField name="title" placeholder="Build Construction" variant="outlined" label="Long title" required/>
                            <TextareaAutosize name="summary" placeholder="Description"required />
                        </FormGroup>
                        <FormGroup sx={{ rowGap: 4, border:'1px dotted gray', marginBottom: 4, padding: 6 }} >
                            <label id="largeimage" > Photos <br/>
                                <input type="file" name="lardeimage" id="smallimage" required/>
                            </label>
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
