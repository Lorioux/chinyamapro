import { PageBreadCrumbPane } from "./PageBreadCrumbPane";

export function PageTitlePane(props) {
  return <section id="page-title">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* .title */}
          <div className="title pull-left">
            <h1>Project Version One</h1>
          </div> {/* /.title */}
          {/* .page-breadcumb */}
          {PageBreadCrumbPane()}
          {/* /.page-breadcumb */}
        </div>
      </div>
    </div>
  </section>;
}
