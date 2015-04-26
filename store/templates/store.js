import Airflux from "airflux";
import actions from "../core/actions.js";

class <%= pascalName %>Store extends Airflux.Store {

    constructor() {
        super();

        this.listenToMany(actions);
    }

    get state() {
        return null;
    }

    onFetchItems() {
    }
}

export default new <%= pascalName %>Store();
