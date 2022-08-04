import personModel from '../models/person';



class PersonController {
    constructor() {
        this.lastID = 0;
        this.persons = [];
        this.selectedPerson = null;
    }
    selectPerson(personID){
        this.selectedPerson = this.persons.filter(p=> p.id === parseInt(personID, 10))[0];
    }
    addPerson(fName, lName, occupation){
        const id = this.lastID;
        const person = new personModel(id, fName, lName, occupation);
        this.persons.push(person);
        this.lastID += 1;
    }
    removePerson(personId){
        this.persons = this.persons.filter(p=> p.id !== parseInt(personId, 10))
    }
}

export default PersonController;