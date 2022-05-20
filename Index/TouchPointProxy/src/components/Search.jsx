import * as React from "react"


export default function SearchBox() {
    return (
        <div className="search-box">
            <div className="container">
                <div className="pull-right search  col-lg-3 col-md-4 col-sm-5 col-xs-12">
                    <form action="#">
                        <input type="text" placeholder="Search Here" /> <button type="submit"><i className="icon icon-Search" /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}