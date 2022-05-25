import * as React from "react";

export const CopyRightPane = () => {
    return (
        <section id="bottom-bar" className="construct">
            <div className="container">
                <div className="row">
                    {/* .copyright */}
                    <div className="copyright pull-left">
                        <p>Copyright © Chinyama 2022. All rights reserved.</p>
                    </div> {/* /.copyright */}
                    {/* .credit */}
                    <div className="credit pull-right">
                        <p>Created by: CloudWork .Ink</p>
                    </div> {/* /.credit */}
                </div>
            </div>
        </section>
    )
}
