import "./items.less";

import React from "react";
import Airflux from "airflux";
import itemsStore from "../stores/items-store.js";
import Item from "./item.jsx";

class ItemsComponent extends Airflux.FluxComponent {

    constructor(props) {
        super(props, {
            items: itemsStore
        });
    }

    render() {
        var items = this.state.items._.map(item => {
            return (
                <Item key={item.id} data={item}/>
            );
        });

        return (
            <ul className="items">{items}</ul>
        );
    }
}

ItemsComponent.propTypes = {
};

export default ItemsComponent;

