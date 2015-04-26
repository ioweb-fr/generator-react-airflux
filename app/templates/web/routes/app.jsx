import "./app.less";

import Actions from "../core/actions.js";
import React from "react";
import Airflux from "airflux";
import Items from "../views/items.jsx";

class App extends Airflux.FluxComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        super.componentDidMount();
        Actions.fetchItems();
    }

    render() {
        return (
            <div className="app">
                <Items/>
            </div>
        );
    }
}

export default App;
