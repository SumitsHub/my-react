class Person {
    constructor(id, name, connections=[]) {
        this.id = id;
        this.label = name;
        this.connections = connections
    }
}

export default Person;