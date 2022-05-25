import { IndexHeader } from "../../Main/IndexHeader";
import BreadCrumbPane from "../../Panes/ContactPane";
import { CopyRightPane } from "../../Panes/CopyRightPane";
import { CompanyBanner } from "../../Panes/DisclaimPane";
import { FooterPane } from "../../Panes/FooterPane";
import {PageTitlePane} from "./PageTitlePane";

import React from "react";
import { PROXY_HOSTNAME } from "../../Main/Constant";
import { Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, FormGroup, Input, TextareaAutosize, TextField } from "@mui/material";
import { AddBoxOutlined, CloseOutlined, DeleteOutline } from "@mui/icons-material";
import { Box } from "@mui/system";

const project_template = {
  id: "04",
  serviceArea: "Civil Construction",
  workType: "Flyover Work",
  summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  image: "/img/project-v5/1.jpg"
}

const SingleProjectItem = (speciality, work, summary, image, id, filter) => {
  return (
    <div key={`${id}-${filter}`} className={`single-project-item hvr-float-shadow mix tank ${filter.toLowerCase()}  clearfix`}>
      <div className="col-lg-8 col-md-8 col-sm-12 img-holder hvr-bounce-to-bottom">
        <div className="overlay"><img src={image} alt="Project Image" /></div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 hvr-bounce-to-bottom">
        <div className="meta">
          <h4>{`${speciality.toUpperCase()}`}</h4>
          <span>{work}</span>
        </div>
        <p>{summary}</p>
        <a href={`${speciality.toUpperCase()}/details/${id}#`} className="read-more hvr-bounce-to-right">More</a>
      </div>
    </div>
  );
};
const GalleryPane = (props) => {
  const {projects} = props

  return (
    <div className="row normal-gallery gallery-v5 clearfix" id="image-gallery-mix">
      {projects}
    </div>
  )
}

export default function Five(props){
  const [projects, setProjects] = React.useState({})
  const [pages, setPage] = React.useState({})
  const [filterPanes, setFilterPane] = React.useState(['all'])
  const [galleryPane, setGalleryPane] = React.useState()
  
  React.useEffect(() => {
    const url = `${PROXY_HOSTNAME}/projects/all`
    const projects = async () => fetch(url)
    projects()
      .then(res => res.json())
      .then(data => {
        setProjects(data)
      })
      .catch(err => {
        console.error(err)
      })
  },[])


  React.useEffect(() => {
    const filters = ['all']
    const gallery = []
    try {
      Object.keys(projects).forEach(k => {
        filters.push(k)
        //Array of projects organize by service type(area) 
        const project = projects[k]
        Array.from(project).map((e) => gallery.push(SingleProjectItem(k, e.workType, e.summary, e.image, e.id, k)))
        
      })
    } catch (error) {
      
    } finally {
      console.log(gallery)
      const filterpanes = []
      filters.map(f => filterpanes.push(FilterPane(f)))
      setFilterPane(filterpanes)
      setGalleryPane(gallery)
    }
    
    
  }, [projects])

  const FilterPane = (filter) => {
        
    return (
        <li key={filter} data-filter={`${ filter === "all" ? 'all' : '.'.concat(filter.toLowerCase())}`}>
          <span >{filter.toUpperCase()}</span>
        </li>
      );
  }


  return (
    <div>
      {<BreadCrumbPane />} 
      
      {<IndexHeader current={"portfolio"}/>}
      
      {PageTitlePane()}
      <section id="project-content">
        <div className="container">
          <div className="section-title">
            <h1>checkout our past projects</h1>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="project-version-one" className="project-v5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="gallery-filter">
                {filterPanes}
              </ul>
            </div>
          </div>
          <div>
            {galleryPane}
          </div>
          {/* {galleryPane} */}
          <div className="post-pagination">
            <ul>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right" /></a></li>
            </ul>
          </div>
        </div>
      </section>
      {CompanyBanner({})}
      
      {<FooterPane/>}
      
      {CopyRightPane()}
      
    </div>
  )
}


function ProjectForm(props){
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



{/*<li data-filter="all">
                  <span>All</span>
                </li>
                 <li data-filter=".bathroom">
                  <span>Bathroom</span>
                </li>
                <li data-filter=".drain">
                  <span>Drain Cleaning</span>
                </li>
                <li data-filter=".plumbing">
                  <span>plumbing</span>
                </li>
                <li data-filter=".outside">
                  <span>outside</span>
                </li>
                <li data-filter=".server-line">
                  <span>sever lines cleaning</span>
                </li>
                <li data-filter=".tank">
                  <span>tank leak inspections</span>
                </li> */}

{/* <div className="single-project-item hvr-float-shadow mix bathroom tank kitchen  clearfix">
        <div className="col-lg-8 col-md-8 col-sm-12 img-holder hvr-bounce-to-bottom">
          <div className="overlay"><img src="/img/project-v5/2.jpg" alt="Project Image" /></div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 hvr-bounce-to-bottom">
          <div className="meta">
            <h4>Kitchken renovation</h4>
            <span>Wood Work of Kitchen</span>
          </div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
          <a href="#" className="read-more hvr-bounce-to-right">More Infor</a>
        </div>
      </div>
      <div className="single-project-item hvr-float-shadow mix tank outside clearfix">
        <div className="col-lg-8 col-md-8  img-holder hvr-bounce-to-bottom">
          <div className="overlay"><img src="/img/project-v5/3.jpg" alt="Project Image" /></div>
        </div>
        <div className="col-lg-4  col-md-4 hvr-bounce-to-bottom">
          <div className="meta">
            <h4>Commercial construction</h4>
            <span>Building Work</span>
          </div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
          <a href="#" className="read-more hvr-bounce-to-right">More Infor</a>
        </div>
      </div>
      <div className="single-project-item hvr-float-shadow mix tank outside clearfix">
        <div className="col-lg-8 col-md-8 col-sm-12 img-holder hvr-bounce-to-bottom">
          <div className="overlay"><img src="/img/project-v5/4.jpg" alt="Project Image" /></div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 hvr-bounce-to-bottom">
          <div className="meta">
            <h4>Building construction</h4>
            <span>Building Work</span>
          </div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
          <a href="#" className="read-more hvr-bounce-to-right">More Infor</a>
        </div>
      </div> */}