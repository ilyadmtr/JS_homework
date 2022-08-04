class Person {
    constructor(id, firstN, lastN, occupation) {
        this.id = id;
        this.firstName = firstN;
        this.lastName = lastN;
        this.subjects = [];
        this.occupation = occupation;
        this.classrooms = [];
    }
}

export default Person;