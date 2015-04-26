import "./<%= paramName %>.less";

import React from "react";
import Airflux from "airflux";

class <%= pascalName %>Component extends Airflux.FluxComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="<%= paramName %>">
            </span>
        );
    }

}

<%= pascalName %>.propTypes = {
    /** EDIT ME **/
};

export default <%= pascalName %>Component;
