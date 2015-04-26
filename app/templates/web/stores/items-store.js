import Airflux from "airflux";
import actions from "../core/actions.js";
import Item from "../data/item.js";
import {Collection} from "simod";
import itemsSample from "../resources/items.json";

class ItemsStore extends Airflux.Store {

    constructor() {
        super();

        this.items = new Collection();
        this.listenToMany(actions);
    }

    get state() {
        return this.items;
    }

    onFetchItems() {
        this.items = new Collection(itemsSample.map(item => Item.reify(Item, item)));
        this.publishState();
    }
}

export default new ItemsStore();
