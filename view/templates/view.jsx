import "./<%= paramName %>.less";

import React from "react";
import Airflux from "airflux";

class <%= pascalName %>Component extends Airflux.FluxComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        super.componentDidMount();
    }

    componentWillUnmount() {
        super.componentWillUnmount();
    }

    render() {
        return (
            <span className="<%= paramName %>">
            </span>
        );
    }

}

<%= pascalName %>Component.propTypes = {
    /** EDIT ME **/
};

export default <%= pascalName %>Component;
