import classroomModel from "../models/classroom";

class ClassroomController {
    constructor() {
        this.lastID = 0;
        this.classrooms = [];
        this.selectedClass = null;
    }
    selectClassroom(classroomID) {
        this.selectedClass = this.classrooms.filter(c=>c.id === parseInt(classroomID, 10))[0];
    }

    addClassroom(subject) {
        this.classrooms.push(
            new classroomModel(this.lastID, subject)
        );
        this.lastID += 1;
    }

    removeClassroom(classroomID) {
        this.classrooms = this.classrooms.filter(c=>c.id !== parseInt(classroomID, 10))
    }

    setSubject(subject, classroomID) {
        const classroom = this.classrooms.filter(c=>c.id === parseInt(classroomID, 10))[0];
        classroom.subject = subject;
    }

    addPerson(person, classroom) {
        if(!person) return;
        classroom.addPerson(person);
    }

    removePerson(person, classroomID) {
        const classroom = this.classrooms
            .filter(c=>c.id === parseInt(classroomID, 10))[0];
        classroom.removePerson(person);
    }
}

export default ClassroomController;
