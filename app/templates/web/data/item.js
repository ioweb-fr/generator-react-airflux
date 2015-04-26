import {Model} from "simod";

class Item extends Model {

    constructor(attrs) {
        super({
            id: Model.required(),
            name: Model.required(),
            backgroundColor: Model.default("#AAA")
        }, attrs);
    }

    get id() { return this.attrs.get("id"); }
    get backgroundColor() { return this.attrs.get("backgroundColor"); }
    get name() { return this.attrs.get("name"); }

}

export default Item;
