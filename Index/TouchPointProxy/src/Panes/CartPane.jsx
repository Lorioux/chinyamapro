import * as React from "react";
import { PROXY_HOSTNAME } from "../Main/Constant";

export function CartInfo(props) {

    const [cart, setCart] = React.useState({
        items: 1,
        price: "$199"
    });
    React.useEffect(() => {
        const url = `${PROXY_HOSTNAME}/cart/items`;
        const Items = async () => fetch(url);
        Items()
            .then(response => response.json())
            .then(data => setCart({
                items: data.items,
                price: data.price
            }))
            .catch(reason => {
                console.log("No items");
            });
    }, []);

    return <div className="cart-box">
        <div className="container">
            <div className="pull-right cart col-lg-6 col-xs-12">
                <p><i className="icon icon-FullShoppingCart" /> You Have <span>{cart.items} {cart.items > 1 ? 'Items' : 'Item'}</span> in your Cart. Total: <span>{cart.price}</span></p>
            </div>
        </div>
    </div>;
}
