import "./item.less";

import React from "react";
import Airflux from "airflux";

class ItemComponent extends Airflux.FluxComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="item" style={{backgroundColor: this.props.data.backgroundColor}}>
                {this.props.data.name}
            </li>
        );
    }

}

ItemComponent.propTypes = {
    data: React.PropTypes.object.isRequired,
};

export default ItemComponent;
