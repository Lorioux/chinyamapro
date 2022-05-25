import * as React from "react" 


import PageBanner from "../Panes/BannerPane"
import BreadCrumbPane from "../Panes/ContactPane"
import Disclaim, {CompanyBanner} from "../Panes/DisclaimPane"
import TeamPlane from "../Panes/TeamPane"
import Services from "../Panes/ServicesPane"
import ServicesPortfolio from "../Panes/PortfolioPane"
import { PressVideo } from "../Panes/PressVideo"
import { PressInfo } from "../Panes/PressPane"
import TestimonialInfo from "../Panes/TestimonialPane"
import { Blog } from "../Panes/BlogPane"
import { Client } from "../Panes/ClientPane"
import { FooterPane } from "../Panes/FooterPane"
import { CopyRightPane } from "../Panes/CopyRightPane"
import { IndexHeader } from "./IndexHeader"


export default function OnePage(props){
    const {editable} = props
    return (
        <div>
            {/* #topbar */}
            {<BreadCrumbPane editable={editable} />} {/* /#topbar */}
            
            {/* header */}
            {<IndexHeader editable={editable} />} 
            {/* /header */}
            
            {<PageBanner editable={editable}/>}

            {<Disclaim editable={editable} />}

            {/* #service-we-provide */}
            {<Services editable={editable} />} 
            {/* /#service-we-provide */}

            {<ServicesPortfolio editable={editable} />}

            {<PressVideo editable={editable} />}

            {<PressInfo  editable={editable} />}

            {<TestimonialInfo editable={editable} />}

            {<TeamPlane  editable={editable} />}

            {<Blog editable={editable} />}

            {/* #clients */}
            {<Client editable={editable} />} {/* /#clients */}

            {<CompanyBanner editable={editable} />}

            {/* footer */}
            {<FooterPane editable={editable} />} 
            {/* /footer */}

            {/* #bottom-bar */}
            {<CopyRightPane editable={editable} />}
            {/* /#bottom-bar */}
        </div>    
    )
}






