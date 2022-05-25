import { IndexHeader } from "../../Main/IndexHeader";
import BreadCrumbPane from "../../Panes/ContactPane";
import { CopyRightPane } from "../../Panes/CopyRightPane";
import {CompanyBanner} from "../../Panes/DisclaimPane";
import { FooterPane } from "../../Panes/FooterPane";
import { PageTitlePane } from "./PageTitlePane";



export const ProjectPanel = () => {
  return (
    <section id="project-version-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="gallery-filter">
              <li data-filter="all">
                <span>All</span>
              </li>
              <li data-filter=".kitchen">
                <span>Kitchen</span>
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
              </li>
            </ul>
          </div>
        </div>
        <div className="row normal-gallery" id="image-gallery-mix">
          <div className="col-lg-4 col-sm-6 col-xs-12 tank outside single-project-item mix">
            <div className="img-wrap">
              <img src="/img/project-v1/1.jpg" alt />
              <div className="content-wrapper hvr-sweep-to-right">
                <div className="content">
                  <div className="button-box">
                    <a data-fancybox-group="project-v1" title="Kitchken Maintance" className="fancybox" href="/img/project-v1/1.jpg"><i className="fa fa-search-plus" /></a>
                  </div>
                  <div className="text-box">
                    <h4>Kitchken Maintance</h4>
                    <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12 plumbing outside single-project-item mix">
            <div className="img-wrap">
              <img src="/img/project-v1/2.jpg" alt />
              <div className="content-wrapper hvr-sweep-to-right">
                <div className="content">
                  <div className="button-box">
                    <a data-fancybox-group="project-v1" title="Kitchken Maintance" className="fancybox" href="/img/project-v1/2.jpg"><i className="fa fa-search-plus" /></a>
                  </div>
                  <div className="text-box">
                    <h4>Kitchken Maintance</h4>
                    <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12 drain plumbing bathroom single-project-item mix">
            <div className="img-wrap">
              <img src="/img/project-v1/3.jpg" alt />
              <div className="content-wrapper hvr-sweep-to-right">
                <div className="content">
                  <div className="button-box">
                    <a data-fancybox-group="project-v1" title="Kitchken Maintance" className="fancybox" href="/img/project-v1/3.jpg"><i className="fa fa-search-plus" /></a>
                  </div>
                  <div className="text-box">
                    <h4>Kitchken Maintance</h4>
                    <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12 kitchen outside drain bathroom single-project-item mix">
            <div className="img-wrap">
              <img src="/img/project-v1/4.jpg" alt />
              <div className="content-wrapper hvr-sweep-to-right">
                <div className="content">
                  <div className="button-box">
                    <a data-fancybox-group="project-v1" title="Kitchken Maintance" className="fancybox" href="/img/project-v1/4.jpg"><i className="fa fa-search-plus" /></a>
                  </div>
                  <div className="text-box">
                    <h4>Kitchken Maintance</h4>
                    <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12 kitchen  bathroom single-project-item mix">
            <div className="img-wrap">
              <img src="/img/project-v1/5.jpg" alt />
              <div className="content-wrapper hvr-sweep-to-right">
                <div className="content">
                  <div className="button-box">
                    <a data-fancybox-group="project-v1" title="Kitchken Maintance" className="fancybox" href="/img/project-v1/5.jpg"><i className="fa fa-search-plus" /></a>
                  </div>
                  <div className="text-box">
                    <h4>Kitchken Maintance</h4>
                    <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12 kitchen drain  single-project-item mix">
            <div className="img-wrap">
              <img src="/img/project-v1/6.jpg" alt />
              <div className="content-wrapper hvr-sweep-to-right">
                <div className="content">
                  <div className="button-box">
                    <a data-fancybox-group="project-v1" title="Kitchken Maintance" className="fancybox" href="/img/project-v1/6.jpg"><i className="fa fa-search-plus" /></a>
                  </div>
                  <div className="text-box">
                    <h4>Kitchken Maintance</h4>
                    <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12 kitchen drain bathroom single-project-item mix">
            <div className="img-wrap">
              <img src="/img/project-v1/7.jpg" alt />
              <div className="content-wrapper hvr-sweep-to-right">
                <div className="content">
                  <div className="button-box">
                    <a data-fancybox-group="project-v1" title="Kitchken Maintance" className="fancybox" href="/img/project-v1/7.jpg"><i className="fa fa-search-plus" /></a>
                  </div>
                  <div className="text-box">
                    <h4>Kitchken Maintance</h4>
                    <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12 kitchen drain bathroom single-project-item mix">
            <div className="img-wrap">
              <img src="/img/project-v1/8.jpg" alt="" />
              <div className="content-wrapper hvr-sweep-to-right">
                <div className="content">
                  <div className="button-box">
                    <a data-fancybox-group="project-v1" title="Kitchken Maintance" className="fancybox" href="/img/project-v1/8.jpg"><i className="fa fa-search-plus" /></a>
                  </div>
                  <div className="text-box">
                    <h4>Kitchken Maintance</h4>
                    <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12 server-line drain bathroom single-project-item mix">
            <div className="img-wrap">
              <img src="/img/project-v1/9.jpg" alt />
              <div className="content-wrapper hvr-sweep-to-right">
                <div className="content">
                  <div className="button-box">
                    <a data-fancybox-group="project-v1" title="Kitchken Maintance" className="fancybox" href="/img/project-v1/9.jpg"><i className="fa fa-search-plus" /></a>
                  </div>
                  <div className="text-box">
                    <h4>Kitchken Maintance</h4>
                    <span>Lorem ipsum dolor sit amet, cons ctetur adipisicing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export const One = <div>
  
  {/* #topbar */}
  {<BreadCrumbPane editable={false} />}
  {/* /#topbar */}
  {/* header */}
  {<IndexHeader current={'projects'} />} 
  {/* /header */}
  {/* #page-title */}
  {PageTitlePane()} 
  {/* /#page-title */}
  {ProjectPanel()}
  {CompanyBanner({})}
  {/* footer */}
  {<FooterPane />}
  {/* /footer */}
  {/* #bottom-bar */}
  {<CopyRightPane />}
  {/* /#bottom-bar */}
</div>


