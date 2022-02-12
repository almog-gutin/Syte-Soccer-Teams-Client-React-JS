import { v4 as uuidv4 } from 'uuid';

class TableHeader {
    constructor(label) {
        this.id = uuidv4();
        this.label = label;
    }
}

export default TableHeader;
