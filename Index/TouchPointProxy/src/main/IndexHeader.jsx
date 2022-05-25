import * as React from "react";
import SearchBox from "../Panes/SearchPane";
import PagesMenu from "../Panes/MenuPane";
import { CartInfo } from "../Panes/CartPane";

export function IndexHeader(props) {
    const {current} = props
    return (
        <header className="construct header-curvy">
            {<SearchBox />}
            {<CartInfo />}
            {<PagesMenu current={current}/>}
        </header>
    );
}
